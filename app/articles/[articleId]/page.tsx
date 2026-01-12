"use client"
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
                                              params,
                                              searchParams}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}){
    const {articleId} = use(params);
    const {lang = "en"} = use(searchParams);
    return (
        <article>
            <h1>News Article Id</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link className="mr-2" href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link className="mr-2" href={`/articles/${articleId}?lang=es`}>Espanish</Link>
                <Link className="mr-2" href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </article>
    );
}