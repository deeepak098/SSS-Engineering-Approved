"use client"

import { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Save, ArrowLeft, LayoutDashboard, FileText, Package, Globe, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [formData, setFormData] = useState(content);

  const handleSave = () => {
    updateContent(formData);
    toast({
      title: "Settings Saved",
      description: "Website content has been successfully updated across all pages.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <h1 className="font-headline font-extrabold text-3xl text-foreground flex items-center gap-2">
                <LayoutDashboard className="h-8 w-8 text-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">Manage your site content, products, and global settings.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> View Site
                </Link>
              </Button>
              <Button onClick={handleSave} className="font-bold flex items-center gap-2">
                <Save className="h-4 w-4" /> Save All Changes
              </Button>
            </div>
          </div>

          <Tabs defaultValue="hero" className="space-y-6">
            <TabsList className="bg-white border w-full justify-start h-auto p-1 flex-wrap">
              <TabsTrigger value="hero" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <Globe className="h-4 w-4 mr-2" /> Hero Section
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <Package className="h-4 w-4 mr-2" /> Products
              </TabsTrigger>
              <TabsTrigger value="blogs" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <FileText className="h-4 w-4 mr-2" /> Blogs
              </TabsTrigger>
              <TabsTrigger value="sustainability" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <Leaf className="h-4 w-4 mr-2" /> Sustainability
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hero">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Hero Configuration</CardTitle>
                  <CardDescription>Update the main headline and call to action on the home page.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Main Title</label>
                    <Input 
                      value={formData.hero.title} 
                      onChange={(e) => setFormData({
                        ...formData, 
                        hero: { ...formData.hero, title: e.target.value }
                      })} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Description Text</label>
                    <Textarea 
                      rows={4}
                      value={formData.hero.description} 
                      onChange={(e) => setFormData({
                        ...formData, 
                        hero: { ...formData.hero, description: e.target.value }
                      })} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">CTA Button Label</label>
                    <Input 
                      value={formData.hero.cta} 
                      onChange={(e) => setFormData({
                        ...formData, 
                        hero: { ...formData.hero, cta: e.target.value }
                      })} 
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Product Management</CardTitle>
                  <CardDescription>Edit product titles and descriptions displayed in the product grid.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    {formData.products.map((p, idx) => (
                      <div key={p.id} className="p-6 border rounded-xl bg-muted/30 space-y-4">
                        <h4 className="font-bold text-primary">Product Card #{idx + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground">Title</label>
                            <Input 
                              value={p.title} 
                              onChange={(e) => {
                                const newProducts = [...formData.products];
                                newProducts[idx].title = e.target.value;
                                setFormData({ ...formData, products: newProducts });
                              }} 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground">Description</label>
                            <Input 
                              value={p.description} 
                              onChange={(e) => {
                                const newProducts = [...formData.products];
                                newProducts[idx].description = e.target.value;
                                setFormData({ ...formData, products: newProducts });
                              }} 
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blogs">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Content Strategy & Blogs</CardTitle>
                  <CardDescription>Manage your latest insights and articles for SEO optimization.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-8">
                    {formData.blogs.map((b, idx) => (
                      <div key={b.id} className="p-6 border rounded-xl bg-muted/30 space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-primary italic">Article #{idx + 1}</h4>
                          <span className="text-xs font-bold text-muted-foreground bg-white px-2 py-1 rounded border">{b.category}</span>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground">Title</label>
                            <Input 
                              value={b.title} 
                              onChange={(e) => {
                                const newBlogs = [...formData.blogs];
                                newBlogs[idx].title = e.target.value;
                                setFormData({ ...formData, blogs: newBlogs });
                              }} 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground">Excerpt</label>
                            <Textarea 
                              value={b.excerpt} 
                              onChange={(e) => {
                                const newBlogs = [...formData.blogs];
                                newBlogs[idx].excerpt = e.target.value;
                                setFormData({ ...formData, blogs: newBlogs });
                              }} 
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sustainability">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Sustainability Commitment</CardTitle>
                  <CardDescription>Edit your environmental goals and mission statement.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">Section Title</label>
                    <Input 
                      value={formData.sustainability.title} 
                      onChange={(e) => setFormData({
                        ...formData, 
                        sustainability: { ...formData.sustainability, title: e.target.value }
                      })} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">Mission Statement</label>
                    <Textarea 
                      rows={6}
                      value={formData.sustainability.description} 
                      onChange={(e) => setFormData({
                        ...formData, 
                        sustainability: { ...formData.sustainability, description: e.target.value }
                      })} 
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
