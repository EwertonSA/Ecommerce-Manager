import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions} from "adminjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { componentLoader } from "../../helpers/componentLoader.js";

export const ProductResourceOptions:ResourceOptions={
navigation:"Catálogo",
editProperties:['name','slug','sku', 'description', 'price', 'stockQuantity','categoryId','uploadThumbnail'],
filterProperties:['name','slug','sku', 'description', 'price', 'stockQuantity','categoryId','thumbnail','updatedAt', 'createdAt'],
listProperties:['name', 'description', 'price', 'stockQuantity','thumbnail'],
showProperties:['name','slug','sku', 'description', 'price', 'stockQuantity','categoryId','thumbnail','updatedAt', 'createdAt']  
}
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const customTempDir = path.join(process.cwd(), 'public', 'tmp')

process.env.TMPDIR = customTempDir
process.env.TEMP = customTempDir
process.env.TMP = customTempDir
export const ProductResourceFeatures:FeatureType[]=[
uploadFileFeature({
componentLoader,provider:{local:{bucket:path.join(__dirname,'..','..','..','public'), opts:{},
 }},
properties:{key:'thumbnail', file:'uploadThumbnail'},
uploadPath:(record, filename)=> `thumbnails/products-${record.get('id')}/${filename}`
})
]