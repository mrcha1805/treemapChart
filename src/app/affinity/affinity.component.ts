import { Component, Injectable, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
// import { Chart, registerables } from 'chart.js';
// import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import * as _ from 'lodash';

export interface Data {
  member: string[],
  selected: boolean,
  label: string,
  value: string,
  summary?: number,
  customers?: number,
  indeterminate?: boolean,
  optionSubLevel?: boolean,
  iconSrc?: string,
  subCount?: number,
  subLevel?: Data[],
}

@Component({
  selector: 'app-affinity',
  templateUrl: './affinity.component.html',
  styleUrls: ['./affinity.component.scss']
})
@Injectable()
export class AffinityComponent {
  // export class AffinityComponent implements OnInit {

  // constructor() {
  //   Chart.register(...registerables, TreemapController, TreemapElement);
  //   this.affinityData = this.masterData.affinityLevelMaster;
  //   this.interestList = [];
  //   this.summaryInterest();
  //   this.test();
  // }

  // masterData = {
  //   "affinityLevelMaster": [
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Automotive",
  //       "value": "AllFilters.automotive",
  //       "subCount": 6,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 24826,
  //           "selected": true,
  //           "label": "Auto repair",
  //           "value": "AllFilters.automotiveAutoRepair"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 10061,
  //           "selected": true,
  //           "label": "Budget car",
  //           "value": "AllFilters.automotiveBudgetCar"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 22769,
  //           "selected": true,
  //           "label": "Luxury cars",
  //           "value": "AllFilters.automotiveLuxuryCars"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 18114,
  //           "selected": true,
  //           "label": "Motorcycles",
  //           "value": "AllFilters.automotiveMotorcycles"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 7733,
  //           "selected": true,
  //           "label": "Off-road vehicles",
  //           "value": "AllFilters.automotiveOffRoadVehicles"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 14212,
  //           "selected": true,
  //           "label": "Automotive - Others",
  //           "value": "AllFilters.automotiveAutomotiveOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Books and Literature",
  //       "value": "AllFilters.booksAndLiterature",
  //       "subCount": 4,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 18408,
  //           "selected": true,
  //           "label": "Children's tips",
  //           "value": "AllFilters.booksAndLiteratureChildrenSTips"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 7550,
  //           "selected": true,
  //           "label": "Healthy books",
  //           "value": "AllFilters.booksAndLiteratureHealthyBooks"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 5177,
  //           "selected": true,
  //           "label": "Magazine",
  //           "value": "AllFilters.booksAndLiteratureMagazine"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 20941,
  //           "selected": true,
  //           "label": "Books and Literature - Others",
  //           "value": "AllFilters.booksAndLiteratureBooksAndLiteratureOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Business and Finance",
  //       "value": "AllFilters.businessAndFinance",
  //       "subCount": 3,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 6372,
  //           "selected": true,
  //           "label": "Construction industry",
  //           "value": "AllFilters.businessAndFinanceConstructionIndustry"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 15603,
  //           "selected": true,
  //           "label": "Home appliance industry",
  //           "value": "AllFilters.businessAndFinanceHomeApplianceIndustry"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 9185,
  //           "selected": true,
  //           "label": "Business and Finance - Others",
  //           "value": "AllFilters.businessAndFinanceBusinessAndFinanceOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Entertainment",
  //       "value": "AllFilters.entertainment",
  //       "subCount": 4,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 23645,
  //           "selected": true,
  //           "label": "Movies",
  //           "value": "AllFilters.entertainmentMovies"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 14089,
  //           "selected": true,
  //           "label": "Music and Audio",
  //           "value": "AllFilters.entertainmentMusicAndAudio"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 22425,
  //           "selected": true,
  //           "label": "News and Politics",
  //           "value": "AllFilters.entertainmentNewsAndPolitics"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 24912,
  //           "selected": true,
  //           "label": "Video gaming",
  //           "value": "AllFilters.entertainmentVideoGaming"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Events and Attractions",
  //       "value": "AllFilters.eventsAndAttractions",
  //       "subCount": 2,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 4632,
  //           "selected": true,
  //           "label": "Amusement and Theme parks",
  //           "value": "AllFilters.eventsAndAttractionsAmusementAndThemeParks"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 3448,
  //           "selected": true,
  //           "label": "Events and Attractions - Others",
  //           "value": "AllFilters.eventsAndAttractionsEventsAndAttractionsOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Food and Drink",
  //       "value": "AllFilters.foodAndDrink",
  //       "subCount": 4,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 11196,
  //           "selected": true,
  //           "label": "Cooking",
  //           "value": "AllFilters.foodAndDrinkCooking"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 12468,
  //           "selected": true,
  //           "label": "Dining out",
  //           "value": "AllFilters.foodAndDrinkDiningOut"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 3251,
  //           "selected": true,
  //           "label": "Food delivery",
  //           "value": "AllFilters.foodAndDrinkFoodDelivery"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 3008,
  //           "selected": true,
  //           "label": "Food & Drink - Others",
  //           "value": "AllFilters.foodAndDrinkFoodDrinkOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Healthy living",
  //       "value": "AllFilters.healthyLiving",
  //       "subCount": 3,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 2506,
  //           "selected": true,
  //           "label": "Fitness and Exercise",
  //           "value": "AllFilters.healthyLivingFitnessAndExercise"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 10736,
  //           "selected": true,
  //           "label": "Wellness",
  //           "value": "AllFilters.healthyLivingWellness"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 9057,
  //           "selected": true,
  //           "label": "Healthy living - Others",
  //           "value": "AllFilters.healthyLivingHealthyLivingOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Hobbies & Interests",
  //       "value": "AllFilters.hobbiesInterests",
  //       "subCount": 4,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 16367,
  //           "selected": true,
  //           "label": "Arts and Crafts",
  //           "value": "AllFilters.hobbiesInterestsArtsAndCrafts"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 25355,
  //           "selected": true,
  //           "label": "Games and Puzzles",
  //           "value": "AllFilters.hobbiesInterestsGamesAndPuzzles"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 11881,
  //           "selected": true,
  //           "label": "Pet",
  //           "value": "AllFilters.hobbiesInterestsPet"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 9739,
  //           "selected": true,
  //           "label": "Hobbies & interests - others",
  //           "value": "AllFilters.hobbiesInterestsHobbiesInterestsOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Real estate",
  //       "value": "AllFilters.realEstate",
  //       "subCount": 2,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 2651,
  //           "selected": true,
  //           "label": "Real estate buying and selling",
  //           "value": "AllFilters.realEstateRealEstateBuyingAndSelling"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 16175,
  //           "selected": true,
  //           "label": "Real estate - Others",
  //           "value": "AllFilters.realEstateRealEstateOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Shopping",
  //       "value": "AllFilters.shopping",
  //       "subCount": 6,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 15756,
  //           "selected": true,
  //           "label": "Electronic",
  //           "value": "AllFilters.shoppingElectronic"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 10687,
  //           "selected": true,
  //           "label": "Grocery shopping",
  //           "value": "AllFilters.shoppingGroceryShopping"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 5097,
  //           "selected": true,
  //           "label": "Home deceration",
  //           "value": "AllFilters.shoppingHomeDeceration"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 13578,
  //           "selected": true,
  //           "label": "Home decoration",
  //           "value": "AllFilters.shoppingHomeDecoration"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 8165,
  //           "selected": true,
  //           "label": "Shopping - kids",
  //           "value": "AllFilters.shoppingShoppingKids"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 17334,
  //           "selected": true,
  //           "label": "Shopping - others",
  //           "value": "AllFilters.shoppingShoppingOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Sports",
  //       "value": "AllFilters.sports",
  //       "subCount": 3,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 7641,
  //           "selected": true,
  //           "label": "Football",
  //           "value": "AllFilters.sportsFootball"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 6387,
  //           "selected": true,
  //           "label": "Sports - Others",
  //           "value": "AllFilters.sportsSportsOthers"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 1655,
  //           "selected": true,
  //           "label": "Track and Field",
  //           "value": "AllFilters.sportsTrackAndField"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Style & Fashion",
  //       "value": "AllFilters.styleFashion",
  //       "subCount": 1,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 7350,
  //           "selected": true,
  //           "label": "Style & Fashion - Others",
  //           "value": "AllFilters.styleFashionStyleFashionOthers"
  //         }
  //       ]
  //     },
  //     {
  //       "member": ["affinityLevelMaster"],
  //       "summary": 0,
  //       "selected": true,
  //       "indeterminate": false,
  //       "optionSubLevel": false,
  //       "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
  //       "label": "Travel",
  //       "value": "AllFilters.travel",
  //       "subCount": 22,
  //       "subLevel": [
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 6312,
  //           "selected": true,
  //           "label": "Air",
  //           "value": "AllFilters.travelAir"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 6377,
  //           "selected": true,
  //           "label": "Bed & Breakfasts",
  //           "value": "AllFilters.travelBedBreakfasts"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 2857,
  //           "selected": true,
  //           "label": "Budget travel",
  //           "value": "AllFilters.travelBudgetTravel"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 11162,
  //           "selected": true,
  //           "label": "Business travel",
  //           "value": "AllFilters.travelBusinessTravel"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 5309,
  //           "selected": true,
  //           "label": "Car rental",
  //           "value": "AllFilters.travelCarRental"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 35383,
  //           "selected": true,
  //           "label": "Family travel",
  //           "value": "AllFilters.travelFamilyTravel"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 42772,
  //           "selected": true,
  //           "label": "Hotels and Motels",
  //           "value": "AllFilters.travelHotelsAndMotels"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 28150,
  //           "selected": true,
  //           "label": "Rail travel",
  //           "value": "AllFilters.travelRailTravel"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 4738,
  //           "selected": true,
  //           "label": "Remittance",
  //           "value": "AllFilters.travelRemittance"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 32517,
  //           "selected": true,
  //           "label": "Road trips",
  //           "value": "AllFilters.travelRoadTrips"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 30318,
  //           "selected": true,
  //           "label": "Travel Accessories",
  //           "value": "AllFilters.travelTravelAccessories"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 33195,
  //           "selected": true,
  //           "label": "Travel China",
  //           "value": "AllFilters.travelTravelChina"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 31421,
  //           "selected": true,
  //           "label": "Travel Hong kong",
  //           "value": "AllFilters.travelTravelHongKong"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 12994,
  //           "selected": true,
  //           "label": "Travel Japan",
  //           "value": "AllFilters.travelTravelJapan"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 47453,
  //           "selected": true,
  //           "label": "Travel Korea",
  //           "value": "AllFilters.travelTravelKorea"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 12714,
  //           "selected": true,
  //           "label": "Travel Malaysia",
  //           "value": "AllFilters.travelTravelMalaysia"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 9354,
  //           "selected": true,
  //           "label": "Travel Singapore",
  //           "value": "AllFilters.travelTravelSingapore"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 49832,
  //           "selected": true,
  //           "label": "Travel Switzerland",
  //           "value": "AllFilters.travelTravelSwitzerland"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 37070,
  //           "selected": true,
  //           "label": "Travel UK",
  //           "value": "AllFilters.travelTravelUk"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 31409,
  //           "selected": true,
  //           "label": "Travel USA",
  //           "value": "AllFilters.travelTravelUsa"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 39392,
  //           "selected": true,
  //           "label": "Travel - Others",
  //           "value": "AllFilters.travelTravelOthers"
  //         },
  //         {
  //           "member": ["affinityLevelSub"],
  //           "customers": 25115,
  //           "selected": true,
  //           "label": "Travel Planning",
  //           "value": "AllFilters.travelTravelPlanning"
  //         }
  //       ]
  //     }
  //   ]
  // }
  // affinityData: Data[] = [];
  // interestList: any;
  // chart: any = [];
  // chartDataSummary: any = [];
  // chartDataLabels: any = [];
  // grouped: any;
  // chartStatus: any;

  // ngOnInit(): void {
  //   this.affinityData = this.masterData.affinityLevelMaster;
  //   this.interestList = [];
  //   this.summaryInterest();
  //   this.test();
  // }

  // summaryInterest() {
  //   let sum: number;
  //   this.affinityData.forEach(level1 => {
  //     sum = 0;
  //     level1.subLevel?.forEach((level2: any) => { sum += level2.customers; });
  //     level1.summary = sum;
  //   });
  //   this.sortDataList();
  //   this.interestList = [];
  //   this.affinityData.forEach(level1 => {
  //     level1.subLevel?.forEach((level2: any) => {
  //       let item = {
  //         group: level1.label,
  //         name: level2.label,
  //         value: level2.value,
  //         customers: parseInt(level2.customers.toString()),
  //         minCustomers: 0,
  //         maxCustomers: parseInt(level2.customers <= 1000 ? 1000 : level2.customers)
  //       }
  //       this.interestList.push(item);
  //     });
  //   });

  //   console.log(this.affinityData);
  //   console.log(this.interestList);
  // }

  // interestLevel2Content() {

  // }

  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }

  //   return value;
  // }

  // test() {
  //   this.setChartData();
  //   this.displayChart();
  // }

  // setChartData() {
  //   this.chartDataSummary = [];
  //   this.chartDataLabels = [];

  //   this.affinityData.forEach(item => {
  //     this.chartDataSummary.push(item.summary);
  //     this.chartDataLabels.push(item.label);
  //   });
  //   console.log('chartDataSummary', this.chartDataSummary);
  //   console.log('chartDataLabels', this.chartDataLabels);
  // }

  // displayChart() {
  //   console.log(this.chartDataSummary);

  //   this.clearChart();
  //   this.chart = new Chart('canvas', {
  //     type: 'treemap',
  //     data: {
  //       datasets: [
  //         {
  //           label: 'Customers',
  //           data: this.chartDataSummary,
  //           tree: this.chartDataSummary,
  //           rtl: false,
  //           borderColor: 'rgb(219, 243, 127)',
  //           backgroundColor: 'rgb(219, 243, 127)',
  //           borderWidth: 1,
  //           spacing: 2,
  //           labels: {
  //             display: true,
  //             font: {
  //               weight: 'bold',
  //               size: 10,
  //               lineHeight: 1.5,
  //               family: '\'Noto Sans\',sans-serif',
  //             },
  //             formatter: (c: any) => {
  //               // return 'line1\nline2\n';
  //               return this.chartDataLabels[c.dataIndex] + '\n' + this.formatLabel(this.chartDataSummary[c.dataIndex]);
  //             },
  //             align: 'center',
  //             position: 'middle',
  //             padding: 10,
  //           },
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'PoC Treemap Chart',
  //           font: {
  //             weight: 'bold',
  //             size: 10,
  //             lineHeight: 1.5,
  //             family: '\'Noto Sans\',sans-serif',
  //           }
  //         },
  //         legend: {
  //           display: false,
  //         },
  //         tooltip: {
  //           enabled: true,
  //           borderWidth: 0,
  //           padding: 10,
  //           borderColor: '#eeeeee',
  //           backgroundColor: '#ffffff',
  //           bodyColor: '#000000',
  //           titleColor: '#000000',
  //           displayColors: false,
  //           cornerRadius: 4,
  //           caretSize: 10,
  //           callbacks: {
  //             title: (c: any) => {
  //               // return 'line1\nline2\n';
  //               return this.chartDataLabels[c[0].dataIndex];
  //             },
  //             label: (c: any) => {
  //               // return 'line1\nline2\n';
  //               return 'customers : ' + this.chartDataSummary[c.dataIndex].toLocaleString();
  //             },
  //           },
  //         }
  //       },
  //       layout: {
  //         padding: {
  //           left: 5,
  //           right: 5,
  //           top: 0,
  //           bottom: 0
  //         }
  //       },
  //       onClick: (c: any, i: any) => this.filter(c, i[0].index),
  //     }
  //   });
  // }

  // groupBy(list: any, keyGetter: any) {
  //   const map = new Map();
  //   list.forEach((item: any) => {
  //     const key = keyGetter(item);
  //     const collection = map.get(key);
  //     if (!collection) {
  //       map.set(key, [item]);
  //     } else {
  //       collection.push(item);
  //     }
  //   });
  //   return map;
  // }

  // sortDataList() {
  //   var sort = this.affinityData.sort((a: any, b: any) => b.summary - a.summary);
  //   console.log(sort);
  //   this.affinityData = sort;
  // }

  // filter(evens: any, index: any) {
  //   console.log('index', index);

  //   this.summaryInterest();
  //   this.grouped = this.groupBy(this.interestList, (data: { group: any; }) => data.group);
  //   let group = this.grouped.get(this.affinityData[index].label);
  //   this.interestList = group;

  //   console.log('group', group);
  //   console.log('interestList', this.interestList);
  // }

  // clearChart() {
  //   this.chartStatus = Chart.getChart("canvas");
  //   if (this.chartStatus != undefined) {
  //     this.chartStatus.destroy();
  //   }
  // }

  // deleteDataList() {
  //   this.clearChart();
  //   this.chart = [];
  //   this.affinityData = [];
  //   this.interestList = [];
  // }

  // refreshDataList() {
  //   this.ngOnInit();
  // }

  // onSliderChange(event: MatSliderChange, item: any) {
  //   console.log(event.value);
  //   console.log(item.customers);

  //   item.customers = event.value;
  //   this.summaryInterestOnFilter(item);
  // }

  // onKeyDownEvent(event: any, item: any) {
  //   item.customers = parseInt(event.target.value);

  //   console.log(item.customers);

  //   this.summaryInterestOnFilter(item);
  // }

  // summaryInterestOnFilter(item: any) {
  //   this.affinityData.forEach((level1: any) => {
  //     level1.subLevel.forEach((level2: any) => {
  //       level2.value.indexOf(item.value) > -1 ? level2.customers = item.customers : null;
  //     })
  //   });
  //   console.log(this.affinityData);

  //   this.summaryInterest();
  //   this.test();
  // }
}
