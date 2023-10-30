import TodoModels from "@/server/models/todo"
import connectDb from "@/server/utils/db"
import { NextResponse as res } from "next/server"

export const POST = async (request) => {
    try {
        const { title, description } = await request.json()
        await connectDb()
        const newPost = await TodoModels.create({ title, description })
        return res.json({
            success: true,
            data: newPost
        }, { status: 201 })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        }, { status: 400 })
    }

}


export const GET = async () => {
    await connectDb();
    const data = await TodoModels.find().sort({ createdAt: -1 });
    return res.json({
        success: true,
        data
    }, { status: 200 })
}


export const DELETE = async (request) => {
    try {
        const dataId = await request.nextUrl.searchParams.get('_id')
        await connectDb()
        const posts = await TodoModels.findById(dataId)

        if (!posts) {
            return res.json({
                success: false,
                message: `post id : ${dataId} not found`
            }, { status: 400 })
        }

        await posts.deleteOne()
        return res.json({
            success: true,
            message: `post id : ${dataId} deleted`
        }, { status: 201 })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export const PATCH = async (request) => {

    try {
        await connectDb()
        const { title, description } = await request.json()
        const dataId = await request.nextUrl.searchParams.get('id')
        const post = await TodoModels.findById(dataId)
        if (!post) {
            return res.json({
                success: false,
                message: `post id : ${dataId} not found`
            }, { status: 400 })
        }

        await post.updateOne({ title, description })
        return res.json({
            success: true,
            message: `post id : ${dataId} updated`
        }, { status: 201 })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}