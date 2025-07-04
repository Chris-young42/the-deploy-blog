import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
const fs = require('fs')

const LoadDB = async () => {
    await ConnectDB()
}

LoadDB()

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get('id')
    if (blogId) {
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json(blog)
    } else {
        const blogs = await BlogModel.find({})
        return NextResponse.json({ blogs })
    }
}



//这玩意？
export async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now()

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title: `${formData.get('title')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
        description: `${formData.get('description')}`,
    }
    await BlogModel.create(blogData)
    console.log('save');

    return NextResponse.json({ success: true, msg: 'Blog added' });
}

export async function DELETE(requset) {
    const id = await requset.nextUrl.searchParams.get('id')
    const blog = await BlogModel.findById(id)
    fs.unlink(`./public/${blog.image}`,()=>{})
 await BlogModel.findByIdAndDelete(id)
 return NextResponse.json({msg:"Blog deleted"})

}