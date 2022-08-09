var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "637"
    },
    "maxResponseTime": {
        "total": "638",
        "ok": "202",
        "ko": "638"
    },
    "meanResponseTime": {
        "total": "397",
        "ok": "156",
        "ko": "638"
    },
    "standardDeviation": {
        "total": "243",
        "ok": "47",
        "ko": "1"
    },
    "percentiles1": {
        "total": "420",
        "ok": "156",
        "ko": "638"
    },
    "percentiles2": {
        "total": "637",
        "ok": "179",
        "ko": "638"
    },
    "percentiles3": {
        "total": "638",
        "ok": "197",
        "ko": "638"
    },
    "percentiles4": {
        "total": "638",
        "ok": "201",
        "ko": "638"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 50
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
    "count": 2,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.571",
        "ok": "0.286",
        "ko": "0.286"
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
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "637",
        "ok": "-",
        "ko": "637"
    },
    "maxResponseTime": {
        "total": "638",
        "ok": "-",
        "ko": "638"
    },
    "meanResponseTime": {
        "total": "638",
        "ok": "-",
        "ko": "638"
    },
    "standardDeviation": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "percentiles1": {
        "total": "638",
        "ok": "-",
        "ko": "638"
    },
    "percentiles2": {
        "total": "638",
        "ok": "-",
        "ko": "638"
    },
    "percentiles3": {
        "total": "638",
        "ok": "-",
        "ko": "638"
    },
    "percentiles4": {
        "total": "638",
        "ok": "-",
        "ko": "638"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.286",
        "ok": "-",
        "ko": "0.286"
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
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "202",
        "ok": "202",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "percentiles2": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles3": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles4": {
        "total": "201",
        "ok": "201",
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
