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
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "percentiles1": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "percentiles2": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles3": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "572",
        "ok": "572",
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
        "total": "0.667",
        "ok": "0.667",
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
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles2": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles3": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "572",
        "ok": "572",
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
        "total": "0.333",
        "ok": "0.333",
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
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles1": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles2": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "percentiles3": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "percentiles4": {
        "total": "105",
        "ok": "105",
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
        "total": "0.333",
        "ok": "0.333",
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
