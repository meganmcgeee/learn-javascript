// Update information in collection of objects


let agencyResources = {
  "1": {
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
    },
    "description": "The agency provides homeless support services and shelter for adults who have chronic mental illness and who are in Skid Row and downtown Los Angeles, including people who are undocumented or who have developmental disabilities or a dual diagnosis of mental illness and substance abuse.",
    "groups": 
      ["undocumented", 
      "developmental disabilities", 
      "dual diagnosis", 
      "mental illness", 
      "substance abuse" ],
    "bedsCount": "21"
  },
  "2":
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
    "hours": "",
    "phones": {
      "Administrative": "(562) 945-3937",  
      "Service/Intake and Hotline": "(562) 945-3939 ext: 2460"
    },
    "description": "The agency provides domestic violence services for low-income victims of intimate partner domestic violence and their children from all areas of Los Angeles County.",
    "groups": ["domestic violence", 
                "children", 
                "victims of domestic violence"],
    "bedsCount": "10"
  },
  "3":
  {
  "x":"-118.30625905668759",
    "y": "34.181242966903717",
    "cat1":"Social Services",
    "cat2":"Homeless Shelters and Services",
    "org_name":"www.oursaviourcenter.org",
    "Name":"Our Saviour Center",
    "addrln1":"4368 Santa Anita Ave.",
    "addrln2":"",
    "city":"El Monte",
    "state":"CA",
    "hours":"Monday through Friday, 9:00am to 5:00pm. ",
    "phones":"FAX (626) 579-2689, Family Planning Service/Intake (626) 579-0290 Ext.100, Administration Service/Intake (626) 579-2190 Ext.116, Shelter Service/Intake (626) 579-0290 Ext.127, Clinic Service/Intake (626) 579-2190 Ext.100,  Service/Intake (626) 579-0290, Y",
    "email":null,
    "url":"www.oursaviourcenter.org",
    "info1":null,
    "info2":null,
    "post_id":1364,
    "description":"This center provides, emergency food, family planning, health services, recreational programs, and shelter for low-income people who live in El Monte and South El Monte.",
    "groups": 
      ["low-income", 
      "developmental disabilities", 
      "dual diagnosis", 
      "mental illness", 
      "substance abuse" ],
      "bedsCount": "5"
  }
}

let resourcesCopy = JSON.parse (JSON.stringify(agencyResources));

function updateRecords(id, prop, value){
if (value ===""){
  delete agencyResources[id][prop]
}else if(prop=== "groups"){
  agencyResources[id][prop] || [];
} else{
  agencyResources[id][prop] = value;
}
return agencyResources;

}

console.log(updateRecords(2, "bedsCount", "0"))