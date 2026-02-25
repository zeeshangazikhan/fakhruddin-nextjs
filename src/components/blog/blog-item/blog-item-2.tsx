import React from "react";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

export default function BlogItemTwo({ item }: { item: IBlogDT }) {
  const imgSrc = item.img!;
  const isString = typeof imgSrc === "string";
  const imgWidth = isString ? 1600 : (imgSrc as any).width || 800;
  const imgHeight = isString ? 900 : (imgSrc as any).height || 600;

  return (
    <div className="tp-blog-item tp_fade_bottom">
      <div className="tp-blog-thumb fix p-relative">
        <Image
          src={imgSrc as any}
          alt="blog-img"
          width={imgWidth}
          height={imgHeight}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <div className="tp-blog-meta">
          <span>{item.date}</span>
        </div>
      </div>
      <div className="tp-blog-content">
        <span>{item.category}</span>
        <h4 className="tp-blog-title-sm">
          {/* <Link href={`/blog-details/${item.id}`}>{item.title}</Link> */}
           <Link href="#">{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
