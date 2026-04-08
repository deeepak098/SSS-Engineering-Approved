"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useContent } from '@/context/ContentContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function BlogSection() {
  const { content } = useContent();

  return (
    <section id="blogs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-foreground">
            Insights & <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest trends in engineering, sustainable manufacturing, and global logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.blogs.map((blog) => {
            const imgData = PlaceHolderImages.find(img => img.id === blog.image);
            return (
              <Card key={blog.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative h-[240px] overflow-hidden">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={imgData.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <h3 className="font-headline font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="pt-2">
                    <Link href="#" className="inline-flex items-center text-primary font-bold text-xs tracking-widest hover:translate-x-2 transition-transform">
                      READ ARTICLE <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
