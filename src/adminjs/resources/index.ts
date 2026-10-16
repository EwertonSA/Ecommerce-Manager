import { ResourceWithOptions } from "adminjs";
import { Address, Category, Customer, Order, Product } from "../../models";
import { CategoryResourceOptions } from "./category";
import { ProductResourceFeatures, ProductResourceOptions } from "./product";
import { CustomerResourceOptions } from "./customer";
import { addressResourceOptions } from "./address";
import { OrderResourceOptions } from "./order";
import { OrderItems } from "../../models/OrderItems";
import { orderItemsResourceOptions } from "./orderItems";

export const adminjsResources:ResourceWithOptions[]=[
{resource:Category, options:CategoryResourceOptions},
{resource:Product, options:ProductResourceOptions, features:ProductResourceFeatures},
{resource:Customer, options:CustomerResourceOptions},
{resource:Address, options:addressResourceOptions},
{resource:Order, options:OrderResourceOptions},
{resource:OrderItems, options:orderItemsResourceOptions}
]