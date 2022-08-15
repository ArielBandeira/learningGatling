var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "670",
        "ok": "670",
        "ko": "1733"
    },
    "maxResponseTime": {
        "total": "1733",
        "ok": "670",
        "ko": "1733"
    },
    "meanResponseTime": {
        "total": "1202",
        "ok": "670",
        "ko": "1733"
    },
    "standardDeviation": {
        "total": "532",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1202",
        "ok": "670",
        "ko": "1733"
    },
    "percentiles2": {
        "total": "1467",
        "ok": "670",
        "ko": "1733"
    },
    "percentiles3": {
        "total": "1680",
        "ok": "670",
        "ko": "1733"
    },
    "percentiles4": {
        "total": "1722",
        "ok": "670",
        "ko": "1733"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.5",
        "ko": "0.5"
    }
},
contents: {
"req_getgamerequest-2b8b9": {
        type: "REQUEST",
        name: "getgamerequest",
path: "getgamerequest",
pathFormatted: "req_getgamerequest-2b8b9",
stats: {
    "name": "getgamerequest",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "670",
        "ok": "670",
        "ko": "1733"
    },
    "maxResponseTime": {
        "total": "1733",
        "ok": "670",
        "ko": "1733"
    },
    "meanResponseTime": {
        "total": "1202",
        "ok": "670",
        "ko": "1733"
    },
    "standardDeviation": {
        "total": "532",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1202",
        "ok": "670",
        "ko": "1733"
    },
    "percentiles2": {
        "total": "1467",
        "ok": "670",
        "ko": "1733"
    },
    "percentiles3": {
        "total": "1680",
        "ok": "670",
        "ko": "1733"
    },
    "percentiles4": {
        "total": "1722",
        "ok": "670",
        "ko": "1733"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.5",
        "ko": "0.5"
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