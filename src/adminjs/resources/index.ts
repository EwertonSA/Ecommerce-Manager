import { ResourceWithOptions } from "adminjs";
import { Category, Product } from "../../models";
import { CategoryResourceOptions } from "./category";
import { ProductResourceOptions } from "./product";

export const adminjsResources:ResourceWithOptions[]=[
{resource:Category, options:CategoryResourceOptions},
{resource:Product, options:ProductResourceOptions}
]