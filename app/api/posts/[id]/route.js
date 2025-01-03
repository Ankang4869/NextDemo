import { NextResponse } from "next/server";

// 定义一个 GET 方法处理器，用于处理客户端发来的 GET 请求
export async function GET(request, { params }) {
    // 从请求 URL 的查询参数中获取名为 "dataField" 的参数值
    // 例如，如果 URL 是 /api/posts/1?dataField=title，则 field 的值为 "title"
    const field = request.nextUrl.searchParams.get("dataField");

    // 使用 fetch 函数从 JSONPlaceholder API 获取指定 ID 的帖子数据
    // URL 中的 `params.id` 是动态路由参数，表示帖子 ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    // 将响应体解析为 JSON 格式的数据
    const data = await res.json();

    // 根据是否提供了 "dataField" 参数决定返回内容：
    // 如果提供了 "dataField"，则返回一个仅包含该字段的对象；
    // 如果未提供，则返回完整的数据对象
    const result = field ? { [field]: data[field] } : data;
    // []表示动态生成对象的属性名
    // 如果 field 有值（即查询参数中提供了 dataField），
    // 创建一个对象，属性名为 field 的值，属性值为 data[field]。

    // 返回一个 JSON 格式的响应，包含过滤后的数据
    return NextResponse.json(result);
}

