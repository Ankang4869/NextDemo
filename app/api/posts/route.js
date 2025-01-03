import { NextResponse } from "next/server";

// 实现GET请求 获取所有文章列表 不包含查询参数
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return NextResponse.json({ data });
}


// 定义一个 POST 方法处理器，用于处理客户端发来的 POST 请求
export async function POST(request) {
  // 从请求体中解析出 JSON 数据，并将其存入变量 article 中
  const article = await request.json();

  // 返回一个 JSON 响应，包含随机生成的 ID 和客户端提供的数据
  return NextResponse.json(
    {
      // 生成一个随机的唯一 ID，使用 36 进制（字母和数字），取后 8 位
      id: Math.random().toString(36).slice(-8),
      // 将客户端发来的 JSON 数据作为响应的一部分返回
      data: article
    },
    {
      // 设置 HTTP 状态码为 201，表示资源已成功创建
      status: 201
    }
  );
}
