import { ResourceWithOptions } from "adminjs";
import { Address, Category, Customer, Order, Product } from "../../models";
import { CategoryResourceOptions } from "./category";
import { ProductResourceOptions } from "./product";
import { CustomerResourceOptions } from "./customer";
import { addressResourceOptions } from "./address";
import { OrderResourceOptions } from "./order";

export const adminjsResources:ResourceWithOptions[]=[
{resource:Category, options:CategoryResourceOptions},
{resource:Product, options:ProductResourceOptions},
{resource:Customer, options:CustomerResourceOptions},
{resource:Address, options:addressResourceOptions},
{resource:Order, options:OrderResourceOptions}
]