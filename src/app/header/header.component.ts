import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productCategories: any = [];
  searchString: String = '';
  selectedSearchCategory: any = {};
  cartData: any = {};
  constructor() { }

  ngOnInit() {
    this.productCategories = [
      { name: 'All Categories', slug: 'all', iconClass: '' },
      { name: 'Electronics', slug: 'electronics', iconClass: '' },
      { name: 'Smartphones & Tablets', slug: 'smartphones-n-tablets', iconClass: '' },
      { name: 'Health & Beauty', slug: 'health-n-beauty', iconClass: '' },
      { name: 'Sports & Outdoors', slug: 'sports-n-outdoors', iconClass: '' },
      { name: 'Furniture', slug: 'furniture', iconClass: '' },
      { name: 'Automotive & Motorcycle', slug: 'automotive-n-motorcycle', iconClass: '' },
      { name: 'Jewellery & Watches', slug: 'jewellery-n-watches', iconClass: '' },
      { name: 'Flashlights & Lamps', slug: 'flashlights-n-lamps', iconClass: '' },
      { name: 'Bags, Shoes & Accessories', slug: 'bags-shoes-n-accessories', iconClass: '' },
      { name: 'Cameras & Photos', slug: 'cameras-n-photos', iconClass: '' },
      { name: 'Holiday Supplies & Gifts', slug: 'holiday-supplies-n-gifts', iconClass: '' }
    ];

    this.selectedSearchCategory = { name: 'All Categories', slug: 'all', iconClass: '' };

    this.cartData = {
      noOfItems: 0,
      totalCost: '0.00'
    };
  }

  onSearchClick(query) {
    console.log('Search for: ' + query + ' from category: ' + this.selectedSearchCategory.name);
  }

  onCategorySelect(category) {
    console.log('Selected Category:', category);
    this.selectedSearchCategory = category;
  }

}
