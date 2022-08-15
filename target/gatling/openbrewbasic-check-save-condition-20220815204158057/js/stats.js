var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "417",
        "ok": "417",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "percentiles2": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "percentiles3": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "percentiles4": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.571",
        "ok": "0.571",
        "ko": "-"
    }
},
contents: {
"req_all-breweries-d72c1": {
        type: "REQUEST",
        name: "all_breweries",
path: "all_breweries",
pathFormatted: "req_all-breweries-d72c1",
stats: {
    "name": "all_breweries",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "percentiles2": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "percentiles3": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "percentiles4": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "0.286",
        "ko": "-"
    }
}
    },"req_single-brewery-d6b15": {
        type: "REQUEST",
        name: "single_brewery",
path: "single_brewery",
pathFormatted: "req_single-brewery-d6b15",
stats: {
    "name": "single_brewery",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles1": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles2": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "percentiles3": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles4": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "0.286",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
