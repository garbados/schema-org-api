Scrapes [schema.org](http://schema.org/) for data on microformats, mapping 1:1 with their URLs. So, <http://schema.org/Person> becomes [/Person](/Person). 

If you have questions, hit up [@garbados](https://twitter.com/garbados). Enjoy!

## Usage

The API scrapes items -- that is, [Thing](http://schema.org/Thing) derivatives -- so trying it on searches or properties will result in much gnashing of teeth.

Expect responses like this, which comes from [/Action](/Action):

    {
      "name": "Action",
      "_links": {
        "self": {
          "href": "/Action"
        },
        "related": [
          {
            "href": "/AchieveAction",
            "name": "AchieveAction"
          },
          {
            "href": "/AssessAction",
            "name": "AssessAction"
          },
          {
            ...
          }
        ]
      },
      "_embedded": [
        {
          "description": "A short description of the item.",
          "expected": {
            "type": "Text"
          },
          "property": "description"
        },
        {
          "description": "URL of an image of the item.",
          "expected": {
            "type": "URL"
          },
          "property": "image"
        },
        {
          ...
        }
      ]
    }