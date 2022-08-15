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
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "percentiles1": {
        "total": "509",
        "ok": "509",
        "ko": "-"
    },
    "percentiles2": {
        "total": "825",
        "ok": "825",
        "ko": "-"
    },
    "percentiles3": {
        "total": "908",
        "ok": "908",
        "ko": "-"
    },
    "percentiles4": {
        "total": "925",
        "ok": "925",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 25
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
        "total": "790",
        "ok": "790",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles1": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "percentiles2": {
        "total": "894",
        "ok": "894",
        "ko": "-"
    },
    "percentiles3": {
        "total": "922",
        "ok": "922",
        "ko": "-"
    },
    "percentiles4": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "percentiles1": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "percentiles2": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles4": {
        "total": "226",
        "ok": "226",
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
