export const Qtestimonials = `*[ _type == "testimonial"]`;

export const Qfaqs = `*[ _type == "faqs"]`;

export const Qcategories = `*[ _type == "categories"]`;

export const Qproducts = `*[ _type == "products"]{
     title,
     secound_title,
     _createdAt,
     image,
     gallery,
     slug,
     excerpt,
     content,
     categories[]->{
          name,
          slug
     }
}`;

export const QSingleCategory = ` *[ _type == "categories" && slug.current == $slug ][0]{
     orderprocess[]->{
          title,
          detail
     },
     name,
     metatitle,
     metadescription,
     metatags,
     slug,
     excerpt,
     image,
     secound_title,
     content,
     grid
}`;

export const QSingleProducts = ` *[ _type == "products" && slug.current == $slug ][0]{
     title,
     secound_title,
     _createdAt,
     image,
     gallery,
     slug,
     excerpt,
     content,
     categories[]->{
          name,
          slug
     },
     grid,
     mailerbox,
     orderprocess[]->{
          title,
          detail
     },
     _createdAt,
     _updatedAt,
     metatitle,
     metadescription,
     metatags
}`;
