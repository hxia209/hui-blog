---
slug: public-api-consumption
title: You want to consume apis, but how?
tags: [api, oath2, curl, http]
---

The origin of most of our ideas and solutions are the daily problems that we face. Usually the reasoning behind it is just to make life easier (thats probably what Jeff Bezos thought when he started Amazon).

Personally, I've been looking for a house or apartment that is to my liking, well located and doesn't dry up my walled 💸💸💸. So what I normally do is open a webpage called [Idealista](https://www.idealista.pt/pt/) which provided a real estate listing given desired parameters, which is most of the time equivelent to less money and more space.
Checking the page daily and always finding the same old ads is a bit frustrating and time consuming so...why not make my life easier and become the next Jeff Bezos?

## Request Access

Usually all api providers they have a page or form where you can contact them and ask for access, in my case, Idealista makes it available through https://developers.idealista.com/access-request. But the experience should be very similar with any other platform, such as Twitter or Instagram.

They will ask you to describe your project and usage. For different use cases they provide different types of access.

As my use case is purely educational and personal, I was offered a free 100 requests per month tier.

## Access granted

One day later I had received credentials and an example on how to interact with their api.

```
We have enabled the access to idealista api(documentation is in the attachments):
Apikey: <APIKEY>
Secret: <SECRET>
Access is free to a maximum of 100 req/month and it’s limited by 1 req/sec. If you need to perform a greater number of requests, let us know.
Example:
curl -X POST -H "Authorization: Bearer {{OAUTH_BEARER}}" -H "Content-Type: multipart/form-data;" -F "center=40.430,-3.702" -F "propertyType=homes" -F "distance=15000" -F "operation=sale" "https://api.idealista.com/3.5/es/search"
```

## Oauth Token

One of the parameters to access their api is an authentication bearer.

We can request a token using the credentials that was provided to us.

```bash
curl -X POST -H "Authorization: Basic <B64(APIKEY:SECRET)>" -H "Content-Type: application/x-www-form-urlencoded;" --data 'grant_type=client_credentials' 'https://api.idealista.com/oauth/token'
```

`<B64(APIKEY:SECRET)>` is basically APIKEY and SECRET separated by a colon, and the encoded using base64. Many tools allows you to encode a string into b64 and [base64encode](https://www.base64encode.org/) was my choice this time as it is very easy and intuitive to use.

If the above command yields success, we should be getting an response similar to:

```json
{"access_token":"<ACCESS_TOKEN>","token_type":"bearer","expires_in":43199,"scope":"read","jti":"c0fc3973-fbcb-4956-bb03-132a17d43faf"}
```

## My Sweet First Request

Now that we're officially permissioned, let's give it a roll.

Using their example and the token that we have just retrieved:
```
curl -X POST -H "Authorization: Bearer <ACCESS_TOKEN>" -H "Content-Type: multipart/form-data;" -F "center=40.430,-3.702" -F "propertyType=homes" -F "distance=15000" -F "operation=sale" "https://api.idealista.com/3.5/es/search"
```

Which results in:

```json
{"elementList":[{"propertyCode":"97243617","thumbnail":"https://img3.idealista.com/blur/WEB_LISTING/0/id.pro.es.image.master/84/5c/ca/973391027.jpg","externalReference":"V224Q6","numPhotos":21,"floor":"1","price":1250000.0,"propertyType":"flat","operation":"sale","size":162.0,"exterior":true,"rooms":4,"bathrooms":3,"address":"barrio Castellana","province":"Madrid","municipality":"Madrid","district":"Barrio de Salamanca","country":"es","neighborhood":"Castellana","latitude":40.434576,"longitude":-3.6824301,"showAddress":false,"url":"https://www.idealista.com/inmueble/97243617/","distance":"1732","description":"📜","hasVideo":true,"status":"good","newDevelopment":false,"hasLift":true,"parkingSpace":{"hasParkingSpace":true,"isParkingSpaceIncludedInPrice":true},"priceByArea":7716.0,"detailedType":{"typology":"flat"},"suggestedTexts":{"subtitle":"Castellana, Madrid","title":"Piso"},"hasPlan":true,"has3DTour":true,"has360":false,"hasStaging":false,"topNewDevelopment":false},{"propertyCode":"95688518","thumbnail":"https://img3.idealista.com/blur/WEB_LISTING/0/id.pro.es.image.master/37/26/5d/954364457.jpg","externalReference":"ag164339","numPhotos":30,"floor":"5","price":740000.0,"propertyType":"flat","operation":"sale","size":121.0,"exterior":true,"rooms":2,"bathrooms":2,"address":"DON RAMÓN DE LA CRUZ","province":"Madrid","municipality":"Madrid","district":"Barrio de Salamanca","country":"es","neighborhood":"Goya","latitude":40.4264599,"longitude":-3.671863,"showAddress":false,"url":"https://www.idealista.com/inmueble/95688518/","distance":"2580","description":"📜","hasVideo":true,"status":"good","newDevelopment":false,"hasLift":true,"parkingSpace":{"hasParkingSpace":true,"isParkingSpaceIncludedInPrice":true},"priceByArea":6116.0,"detailedType":{"typology":"flat"},"suggestedTexts":{"subtitle":"Goya, Madrid","title":"Piso en DON RAMÓN DE LA CRUZ"},"hasPlan":true,"has3DTour":true,"has360":false,"hasStaging":true,"topNewDevelopment":false}
...
...
...
],"total":20570,"totalPages":1029,"actualPage":1,"itemsPerPage":20,"numPaginations":0,"hiddenResults":false,"summary":["Comprar","Viviendas","barrio Trafalgar, Madrid","Todos los precios","Todos los tamaños"],"alertName":"Viviendas en barrio Trafalgar, Madrid","upperRangePosition":20,"paginable":true,"lowerRangePosition":0}
```

Replaced description tag from response with 📜 and removed most of the results due to the response being massively long. But as you can see, we've successfully invoked Idealist's api and got real data from them. 

Now it's time to create an [_Quarkus_](https://quarkus.io/) application with it, containerize, deploy to [_OpenShift_](http://redhat.com/en/technologies/cloud-computing/openshift) as a [_Knative_](http://knative.dev) [_Service_](https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#service) and call it periodically using a [_Ping Source_](https://knative.dev/docs/eventing/sources/ping-source/reference/) over a [_Channel_](https://knative.dev/docs/eventing/channels/) and sends me a message to my Telegram.

Just kidding, that would be too much, right? (Stay tuned!)

:::info

I've deliberately switched some sensitive information like `ACCESS_TOKEN`, `APIKEY` and `SECRET`, because 100 request per months is very limiting and I don't want everyone to use my resources. So hands off! 🙅‍♂️🙅‍♂️🙅‍♂️

:::