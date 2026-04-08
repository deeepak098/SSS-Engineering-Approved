
"use client"

import { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Save, ArrowLeft, LayoutDashboard, FileText, Package, Globe, ImageIcon, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [formData, setFormData] = useState(content);

  useEffect(() => {
    setFormData(content);
  }, [content]);

  const handleSave = () => {
    updateContent(formData);
    toast({
      title: "Settings Saved",
      description: "Website content and technical specifications have been successfully updated.",
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
              <p className="text-muted-foreground">Manage your site content, products, and technical specs.</p>
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

          <Tabs defaultValue="products" className="space-y-6">
            <TabsList className="bg-white border w-full justify-start h-auto p-1 flex-wrap">
              <TabsTrigger value="hero" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <Globe className="h-4 w-4 mr-2" /> Hero
              </TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <BarChart3 className="h-4 w-4 mr-2" /> Main Stats
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <Package className="h-4 w-4 mr-2" /> Products
              </TabsTrigger>
              <TabsTrigger value="blogs" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <FileText className="h-4 w-4 mr-2" /> Blogs
              </TabsTrigger>
              <TabsTrigger value="logistics" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5">
                <Globe className="h-4 w-4 mr-2" /> Logistics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hero">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Hero Configuration</CardTitle>
                    <CardDescription>Update the main headline and call to action.</CardDescription>
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
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Hero & About Images</CardTitle>
                    <CardDescription>Update URLs for the main hero and about backgrounds.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" /> Hero Image URL
                      </label>
                      <Input 
                        value={formData.hero.imageUrl} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          hero: { ...formData.hero, imageUrl: e.target.value }
                        })} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" /> About Page Image URL
                      </label>
                      <Input 
                        value={formData.about.imageUrl} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          about: { ...formData.about, imageUrl: e.target.value }
                        })} 
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Company Stats (Below Hero)</CardTitle>
                  <CardDescription>Edit the 4 main statistics shown on the homepage.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {formData.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 border rounded-lg space-y-4 bg-muted/30">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-muted-foreground">Value (e.g. 15+)</label>
                          <Input 
                            value={stat.value} 
                            onChange={(e) => {
                              const newStats = [...formData.stats];
                              newStats[idx].value = e.target.value;
                              setFormData({ ...formData, stats: newStats });
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-muted-foreground">Label</label>
                          <Input 
                            value={stat.label} 
                            onChange={(e) => {
                              const newStats = [...formData.stats];
                              newStats[idx].label = e.target.value;
                              setFormData({ ...formData, stats: newStats });
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Product Management</CardTitle>
                  <CardDescription>Edit product details and their technical specifications.</CardDescription>
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
                            <label className="text-xs font-bold text-muted-foreground">Image URL</label>
                            <Input 
                              value={p.imageUrl} 
                              onChange={(e) => {
                                const newProducts = [...formData.products];
                                newProducts[idx].imageUrl = e.target.value;
                                setFormData({ ...formData, products: newProducts });
                              }} 
                            />
                          </div>
                          <div className="md:col-span-2 space-y-2">
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
                          
                          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                            <div className="space-y-2">
                              <label className="text-xs font-bold text-muted-foreground">Capacity Spec</label>
                              <Input 
                                value={p.specs?.capacity || ''} 
                                placeholder="e.g. 3000 trays/hr"
                                onChange={(e) => {
                                  const newProducts = [...formData.products];
                                  newProducts[idx].specs = { ...newProducts[idx].specs, capacity: e.target.value };
                                  setFormData({ ...formData, products: newProducts });
                                }} 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold text-muted-foreground">Power Spec</label>
                              <Input 
                                value={p.specs?.power || ''} 
                                placeholder="e.g. 45-90 kW"
                                onChange={(e) => {
                                  const newProducts = [...formData.products];
                                  newProducts[idx].specs = { ...newProducts[idx].specs, power: e.target.value };
                                  setFormData({ ...formData, products: newProducts });
                                }} 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold text-muted-foreground">Molds Spec</label>
                              <Input 
                                value={p.specs?.molds || ''} 
                                placeholder="e.g. 8 sides"
                                onChange={(e) => {
                                  const newProducts = [...formData.products];
                                  newProducts[idx].specs = { ...newProducts[idx].specs, molds: e.target.value };
                                  setFormData({ ...formData, products: newProducts });
                                }} 
                              />
                            </div>
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
                  <CardDescription>Manage articles and featured images.</CardDescription>
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              <label className="text-xs font-bold text-muted-foreground">Image URL</label>
                              <Input 
                                value={b.imageUrl} 
                                onChange={(e) => {
                                  const newBlogs = [...formData.blogs];
                                  newBlogs[idx].imageUrl = e.target.value;
                                  setFormData({ ...formData, blogs: newBlogs });
                                }} 
                              />
                            </div>
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

            <TabsContent value="logistics">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Logistics Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase text-muted-foreground">Title</label>
                      <Input 
                        value={formData.logistics.title} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          logistics: { ...formData.logistics, title: e.target.value }
                        })} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase text-muted-foreground">Background Map Image URL</label>
                      <Input 
                        value={formData.logistics.imageUrl} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          logistics: { ...formData.logistics, imageUrl: e.target.value }
                        })} 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">Description</label>
                    <Textarea 
                      value={formData.logistics.description} 
                      onChange={(e) => setFormData({
                        ...formData, 
                        logistics: { ...formData.logistics, description: e.target.value }
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
