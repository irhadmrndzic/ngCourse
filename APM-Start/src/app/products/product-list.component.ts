// tslint:disable: no-inferrable-types
// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  // tslint:disable: no-inferrable-types
  // tslint:disable: quotemark

  pageTitle: string = "Lista Proizvoda";
  imageWidth: number = 50;
  showImage: boolean = false;
  imageMargin: number = 2;

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];
  // products: any[] = [
  products: IProduct[] = [];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  constructor(private productService: ProductService) {}

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
