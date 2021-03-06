import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TreemapController, TreemapElement} from 'chartjs-chart-treemap';

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
Chart.register(TreemapController, TreemapElement);
@Component({
  selector: 'app-affinity',
  templateUrl: './affinity.component.html',
  styleUrls: ['./affinity.component.scss']
})
export class AffinityComponent implements OnInit {

  constructor() { }

  
  masterData = {    
    "affinityLevelMaster": [
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Automotive",
          "value": "AllFilters.automotive",
          "subCount": 6,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 24826,
              "selected": true,
              "label": "Auto repair",
              "value": "AllFilters.automotiveAutoRepair"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 10061,
              "selected": true,
              "label": "Budget car",
              "value": "AllFilters.automotiveBudgetCar"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 22769,
              "selected": true,
              "label": "Luxury cars",
              "value": "AllFilters.automotiveLuxuryCars"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 18114,
              "selected": true,
              "label": "Motorcycles",
              "value": "AllFilters.automotiveMotorcycles"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 7733,
              "selected": true,
              "label": "Off-road vehicles",
              "value": "AllFilters.automotiveOffRoadVehicles"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 14212,
              "selected": true,
              "label": "Automotive - Others",
              "value": "AllFilters.automotiveAutomotiveOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Books and Literature",
          "value": "AllFilters.booksAndLiterature",
          "subCount": 4,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 18408,
              "selected": true,
              "label": "Children's tips",
              "value": "AllFilters.booksAndLiteratureChildrenSTips"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 7550,
              "selected": true,
              "label": "Healthy books",
              "value": "AllFilters.booksAndLiteratureHealthyBooks"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 5177,
              "selected": true,
              "label": "Magazine",
              "value": "AllFilters.booksAndLiteratureMagazine"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 20941,
              "selected": true,
              "label": "Books and Literature - Others",
              "value": "AllFilters.booksAndLiteratureBooksAndLiteratureOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Business and Finance",
          "value": "AllFilters.businessAndFinance",
          "subCount": 3,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 6372,
              "selected": true,
              "label": "Construction industry",
              "value": "AllFilters.businessAndFinanceConstructionIndustry"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 15603,
              "selected": true,
              "label": "Home appliance industry",
              "value": "AllFilters.businessAndFinanceHomeApplianceIndustry"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 9185,
              "selected": true,
              "label": "Business and Finance - Others",
              "value": "AllFilters.businessAndFinanceBusinessAndFinanceOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Entertainment",
          "value": "AllFilters.entertainment",
          "subCount": 4,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 23645,
              "selected": true,
              "label": "Movies",
              "value": "AllFilters.entertainmentMovies"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 14089,
              "selected": true,
              "label": "Music and Audio",
              "value": "AllFilters.entertainmentMusicAndAudio"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 22425,
              "selected": true,
              "label": "News and Politics",
              "value": "AllFilters.entertainmentNewsAndPolitics"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 24912,
              "selected": true,
              "label": "Video gaming",
              "value": "AllFilters.entertainmentVideoGaming"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Events and Attractions",
          "value": "AllFilters.eventsAndAttractions",
          "subCount": 2,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 4632,
              "selected": true,
              "label": "Amusement and Theme parks",
              "value": "AllFilters.eventsAndAttractionsAmusementAndThemeParks"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 3448,
              "selected": true,
              "label": "Events and Attractions - Others",
              "value": "AllFilters.eventsAndAttractionsEventsAndAttractionsOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Food and Drink",
          "value": "AllFilters.foodAndDrink",
          "subCount": 4,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 11196,
              "selected": true,
              "label": "Cooking",
              "value": "AllFilters.foodAndDrinkCooking"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 12468,
              "selected": true,
              "label": "Dining out",
              "value": "AllFilters.foodAndDrinkDiningOut"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 3251,
              "selected": true,
              "label": "Food delivery",
              "value": "AllFilters.foodAndDrinkFoodDelivery"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 3008,
              "selected": true,
              "label": "Food & Drink - Others",
              "value": "AllFilters.foodAndDrinkFoodDrinkOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Healthy living",
          "value": "AllFilters.healthyLiving",
          "subCount": 3,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 2506,
              "selected": true,
              "label": "Fitness and Exercise",
              "value": "AllFilters.healthyLivingFitnessAndExercise"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 10736,
              "selected": true,
              "label": "Wellness",
              "value": "AllFilters.healthyLivingWellness"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 9057,
              "selected": true,
              "label": "Healthy living - Others",
              "value": "AllFilters.healthyLivingHealthyLivingOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Hobbies & Interests",
          "value": "AllFilters.hobbiesInterests",
          "subCount": 4,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 16367,
              "selected": true,
              "label": "Arts and Crafts",
              "value": "AllFilters.hobbiesInterestsArtsAndCrafts"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 25355,
              "selected": true,
              "label": "Games and Puzzles",
              "value": "AllFilters.hobbiesInterestsGamesAndPuzzles"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 11881,
              "selected": true,
              "label": "Pet",
              "value": "AllFilters.hobbiesInterestsPet"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 9739,
              "selected": true,
              "label": "Hobbies & interests - others",
              "value": "AllFilters.hobbiesInterestsHobbiesInterestsOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Real estate",
          "value": "AllFilters.realEstate",
          "subCount": 2,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 2651,
              "selected": true,
              "label": "Real estate buying and selling",
              "value": "AllFilters.realEstateRealEstateBuyingAndSelling"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 16175,
              "selected": true,
              "label": "Real estate - Others",
              "value": "AllFilters.realEstateRealEstateOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Shopping",
          "value": "AllFilters.shopping",
          "subCount": 6,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 15756,
              "selected": true,
              "label": "Electronic",
              "value": "AllFilters.shoppingElectronic"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 10687,
              "selected": true,
              "label": "Grocery shopping",
              "value": "AllFilters.shoppingGroceryShopping"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 5097,
              "selected": true,
              "label": "Home deceration",
              "value": "AllFilters.shoppingHomeDeceration"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 13578,
              "selected": true,
              "label": "Home decoration",
              "value": "AllFilters.shoppingHomeDecoration"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 8165,
              "selected": true,
              "label": "Shopping - kids",
              "value": "AllFilters.shoppingShoppingKids"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 17334,
              "selected": true,
              "label": "Shopping - others",
              "value": "AllFilters.shoppingShoppingOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Sports",
          "value": "AllFilters.sports",
          "subCount": 3,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 7641,
              "selected": true,
              "label": "Football",
              "value": "AllFilters.sportsFootball"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 6387,
              "selected": true,
              "label": "Sports - Others",
              "value": "AllFilters.sportsSportsOthers"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 1655,
              "selected": true,
              "label": "Track and Field",
              "value": "AllFilters.sportsTrackAndField"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Style & Fashion",
          "value": "AllFilters.styleFashion",
          "subCount": 1,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 7350,
              "selected": true,
              "label": "Style & Fashion - Others",
              "value": "AllFilters.styleFashionStyleFashionOthers"
            }
          ]
        },
        {
          "member": ["affinityLevelMaster"],
          "summary": 0,
          "selected": true,
          "indeterminate": false,
          "optionSubLevel": false,
          "iconSrc": "../../../../assets/common/images/icons/arrow_down.svg",
          "label": "Travel",
          "value": "AllFilters.travel",
          "subCount": 22,
          "subLevel": [
            {
              "member": ["affinityLevelSub"],
              "customers": 6312,
              "selected": true,
              "label": "Air",
              "value": "AllFilters.travelAir"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 6377,
              "selected": true,
              "label": "Bed & Breakfasts",
              "value": "AllFilters.travelBedBreakfasts"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 2857,
              "selected": true,
              "label": "Budget travel",
              "value": "AllFilters.travelBudgetTravel"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 11162,
              "selected": true,
              "label": "Business travel",
              "value": "AllFilters.travelBusinessTravel"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 5309,
              "selected": true,
              "label": "Car rental",
              "value": "AllFilters.travelCarRental"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 35383,
              "selected": true,
              "label": "Family travel",
              "value": "AllFilters.travelFamilyTravel"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 42772,
              "selected": true,
              "label": "Hotels and Motels",
              "value": "AllFilters.travelHotelsAndMotels"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 28150,
              "selected": true,
              "label": "Rail travel",
              "value": "AllFilters.travelRailTravel"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 4738,
              "selected": true,
              "label": "Remittance",
              "value": "AllFilters.travelRemittance"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 32517,
              "selected": true,
              "label": "Road trips",
              "value": "AllFilters.travelRoadTrips"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 30318,
              "selected": true,
              "label": "Travel Accessories",
              "value": "AllFilters.travelTravelAccessories"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 33195,
              "selected": true,
              "label": "Travel China",
              "value": "AllFilters.travelTravelChina"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 31421,
              "selected": true,
              "label": "Travel Hong kong",
              "value": "AllFilters.travelTravelHongKong"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 12994,
              "selected": true,
              "label": "Travel Japan",
              "value": "AllFilters.travelTravelJapan"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 47453,
              "selected": true,
              "label": "Travel Korea",
              "value": "AllFilters.travelTravelKorea"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 12714,
              "selected": true,
              "label": "Travel Malaysia",
              "value": "AllFilters.travelTravelMalaysia"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 9354,
              "selected": true,
              "label": "Travel Singapore",
              "value": "AllFilters.travelTravelSingapore"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 49832,
              "selected": true,
              "label": "Travel Switzerland",
              "value": "AllFilters.travelTravelSwitzerland"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 37070,
              "selected": true,
              "label": "Travel UK",
              "value": "AllFilters.travelTravelUk"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 31409,
              "selected": true,
              "label": "Travel USA",
              "value": "AllFilters.travelTravelUsa"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 39392,
              "selected": true,
              "label": "Travel - Others",
              "value": "AllFilters.travelTravelOthers"
            },
            {
              "member": ["affinityLevelSub"],
              "customers": 25115,
              "selected": true,
              "label": "Travel Planning",
              "value": "AllFilters.travelTravelPlanning"
            }
          ]
        }
      ]
    }
  affinityData: Data[] = [];

  config = {
    type: 'treemap',
    data: {
      datasets: [
        {
          label: 'My treemap dataset',
          tree: [15, 6, 6, 5, 4, 3, 2, 2],
          borderColor: 'green',
          borderWidth: 1,
          spacing: 0,
        
        }
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'My treemap chart'
        },
        legend: {
          display: false
        }
      }
    }
  };

  interestList: any;
  ngOnInit(): void {
    this.affinityData = this.masterData.affinityLevelMaster;
    this.summaryInterest();
  }

  summaryInterest(){
    let sum:number;
    this.interestList = [];
    this.masterData.affinityLevelMaster.forEach(level1 => {
      sum = 0;
      level1.subLevel?.forEach(level2=> {
        sum += level2.customers;
        let item = {
          name: level2.label,
          value: level2.value,
          customers: level2.customers
        }
        this.interestList.push(item);
      });
      level1.summary = sum;
  
      
    });
    console.log( this.affinityData);
    console.log(this.interestList);
  }

  interestLevel2Content(){
   

  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
