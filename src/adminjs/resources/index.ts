import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { CategoryResourceOptions } from "./category";

export const adminjsResources:ResourceWithOptions[]=[
{resource:Category, options:CategoryResourceOptions}
]