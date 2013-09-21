Scrapes [schema.org](http://schema.org/) for data on microformats, mapping 1:1 with their URLs. So, <http://schema.org/Person> becomes [/Person](/Person).

Expect responses like this, which comes from [/AggregateRating](/AggregateRating):

    [
      {
        "url": "http://schema.org/additionalType",
        "property": "additionalType",
        "type": "URL",
        "description": "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally."
      },
      {
        "url": "http://schema.org/description",
        "property": "description",
        "type": "Text",
        "description": "A short description of the item."
      },
      {
        "url": "http://schema.org/image",
        "property": "image",
        "type": "URL",
        "description": "URL of an image of the item."
      },
      {
        "url": "http://schema.org/name",
        "property": "name",
        "type": "Text",
        "description": "The name of the item."
      },
      {
        "url": "http://schema.org/sameAs",
        "property": "sameAs",
        "type": "URL",
        "description": "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website."
      },
      {
        "url": "http://schema.org/url",
        "property": "url",
        "type": "URL",
        "description": "URL of the item."
      },
      {
        "url": "http://schema.org/bestRating",
        "property": "bestRating",
        "type": "NumberorText",
        "description": "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed."
      },
      {
        "url": "http://schema.org/ratingValue",
        "property": "ratingValue",
        "type": "Text",
        "description": "The rating for the content."
      },
      {
        "url": "http://schema.org/worstRating",
        "property": "worstRating",
        "type": "NumberorText",
        "description": "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed."
      },
      {
        "url": "http://schema.org/itemReviewed",
        "property": "itemReviewed",
        "type": {
          "url": "http://schema.org/Thing",
          "property": "Thing"
        },
        "description": "The item that is being reviewed/rated."
      },
      {
        "url": "http://schema.org/ratingCount",
        "property": "ratingCount",
        "type": "Number",
        "description": "The count of total number of ratings."
      },
      {
        "url": "http://schema.org/reviewCount",
        "property": "reviewCount",
        "type": "Number",
        "description": "The count of total number of reviews."
      },
      {
        "url": "http://schema.org/bestRating",
        "property": "bestRating",
        "type": "NumberorText",
        "description": "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed."
      },
      {
        "url": "http://schema.org/ratingValue",
        "property": "ratingValue",
        "type": "Text",
        "description": "The rating for the content."
      },
      {
        "url": "http://schema.org/worstRating",
        "property": "worstRating",
        "type": "NumberorText",
        "description": "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed."
      },
      {
        "url": "http://schema.org/itemReviewed",
        "property": "itemReviewed",
        "type": {
          "url": "http://schema.org/Thing",
          "property": "Thing"
        },
        "description": "The item that is being reviewed/rated."
      },
      {
        "url": "http://schema.org/ratingCount",
        "property": "ratingCount",
        "type": "Number",
        "description": "The count of total number of ratings."
      },
      {
        "url": "http://schema.org/reviewCount",
        "property": "reviewCount",
        "type": "Number",
        "description": "The count of total number of reviews."
      },
      {
        "url": "http://schema.org/itemReviewed",
        "property": "itemReviewed",
        "type": {
          "url": "http://schema.org/Thing",
          "property": "Thing"
        },
        "description": "The item that is being reviewed/rated."
      },
      {
        "url": "http://schema.org/ratingCount",
        "property": "ratingCount",
        "type": "Number",
        "description": "The count of total number of ratings."
      },
      {
        "url": "http://schema.org/reviewCount",
        "property": "reviewCount",
        "type": "Number",
        "description": "The count of total number of reviews."
      }
    ]

If you have questions, hit up [@garbados](https://twitter.com/garbados). Enjoy!