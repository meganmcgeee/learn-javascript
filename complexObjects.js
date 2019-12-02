// Complex object manipulation

let agencyResources =[ {
  "x": "-118.2467481",
  "y": "34.04230597",
  "cat1": "Social Services",
  "cat2": "Homeless Shelters and Services",
  "org_name":	"Lamp Community - Frank Rice Access Center",
  "addrln1": "627 San Julian St.",	
  "addrln2": "",
  "city": "Los Angeles",
  "state": "CA",	
  "hours": "Monday through Friday, 8:00am to 4:00pm. ",
  "phones": {
    "Administrative": "(213) 488-9559", 
    "Service/Intake": "(213) 488-0031"
  }
  "description": "The agency provides homeless support services and shelter for adults who have chronic mental illness and who are in Skid Row and downtown Los Angeles, including people who are undocumented or who have developmental disabilities or a dual diagnosis of mental illness and substance abuse.",
  "groups": ["undocumented", "developmental disabilities", "dual diagnosis", "mental illness", "substance abuse" ],
  "beds openCount": "21"
},
{
  "x": "-118.0335875",
  "y": "33.97583804",
  "cat1": "Social Services",
  "cat2": "Homeless Shelters and Services",
  "org_name":	"Women's And Children's Crisis Shelter",
  "addrln1": "13305 Penn St",	
  "addrln2": "",
  "city": "Whittier",
  "state": "CA",	
  "hours": ""
  "phones": {
    "Administrative": "(562) 945-3937",  
    "Service/Intake and Hotline": "(562) 945-3939 ext: 2460"
  }
  "description": "The agency provides domestic violence services for low-income victims of intimate partner domestic violence and their children from all areas of Los Angeles County.",
  "groups": ["domestic violence", "children", "victims of domestic violence"],
  "beds openCount": "0"
}

]
// Reaches into second agency resouce element and gets the first group listed in the group property
let groupsServed = agencyResources[1].groups[1];
console.log(groupsServed)