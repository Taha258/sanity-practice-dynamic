import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
        name: "slug",
        type: "slug",
        title: "Slug",
        options:{
            source:'title',
            maxLength:96
        }
    }),
    defineField({
        name:'image',
        type:'image',
        title:'Image',
    }),
    defineField({
        name:'description',
        type:'text',
        title:'Description',
    }),
    defineField({
        name:'price',
        type:'number',
        title:'Price',
    }),

    defineField({
        name:'category',
        type:'string',
        title:'Catogory',
        options:{
            list:[
                {title:'Mens',value:'mens'},
                {title:'Women',value:'women'},
                {title:'Kids',value:'kids'},
            ]
        }
    }),
  ],
});
