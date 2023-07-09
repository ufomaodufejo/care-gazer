import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Link from "next/link";
import { BlogProps } from "./blog.types";

export default function Blog({ blogPosts, post }: BlogProps) {
  // if (!blogPosts) {
  //   return (
  //     <DefaultLayout>
  //       <div>
  //         <h1 className="text-5xl text-center m-[100px]">No Blog Posts Yet</h1>
  //       </div>
  //       ;
  //     </DefaultLayout>
  //   );
  // }
  return (
    <DefaultLayout>
      <section className="mx-auto flex flex-col items-center justify-center gap-6 my-[156px]">
        <h1 className="text-[40px]">Blog</h1>
        <p className="text-[24px]">
          Lorem ipsum dolor sit amet consectetur. Scelerisque.
        </p>
      </section>

      <section className="w-[1200px] h-[400px] gap-20 flex mx-auto mb-[124px] p-10">
        <div className="w-[728px]">
          <ul>
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <div>
                  <Link href={`/blog/${post.slug}`} as={`/blog/${post.slug}`}>
                    <a className="text-[40px] mb-6">{post.title}</a>
                  </Link>
                  <p className="text-[24px] mb-4">
                    Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                    integer interdum ac tellus semper felis mauris amet. Vitae
                    nulla aliquam nisl dignissim amet egestas. Leo libero
                    viverra sceler vulputate ullamcorper vitae s
                  </p>
                  <p className="text-[24px] mb-4 text-[#d4d3d3]">
                    {`By + " " + ${post.author} +" " + ${post.date}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[320px] h-[320px] bg-[#E0E0E0]"></div>
      </section>
    </DefaultLayout>
  );
}
