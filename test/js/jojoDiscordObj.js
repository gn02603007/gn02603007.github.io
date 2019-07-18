function getJoJoDiscordObj () {
    return {
        myAuth : null,
        ver : "0.9.91",
        
        initStatus : false,
        sellFlag : true,
        execLogFlag : true,
        timeoutTimer : null,
        title: "",
        channelName: "",
        channelId: "",
        iterationsCount : 0,
        loopIterations : 0,
        loopIterationsCount : 0,

        sendMessage : function (content, delay, iterations) {
            var apiUrl = "";
            var sendParam = {};
            var execFunc = "";
            var runFlag = true;
            var xhr = new XMLHttpRequest();

            if (!this.initStatus) {
                this.init();
                var thisHref = location.href.substring(22);
                this.title = $("title").text;
                this.channelName = $("a[href='"+thisHref+"']").getAttribute("aria-label");
                this.channelId = thisHref.split("/")[3];
            }
            if (this.iterationsCount < iterations && this.execLogFlag) {
                console.log("[ Loop " + this.loopIterationsCount + " ] 第 " + (this.iterationsCount + 1) + " 次於 '"+this.channelName +" - "+this.title+"' 執行 " + content + " 指令。");
            }

            if (this.iterationsCount == iterations) {
                var finalContent = "";
                if (content == "!!fish") {
                    finalContent = "!!fish -sa"
                } else if (content == "!!draw") {
                    finalContent = "!!sell all"
                } else {
                    runFlag = false;
                    this.stopMessage();
                }
                if (!this.sellFlag) {
                    runFlag = false;
                    this.stopMessage();
                }
                sendParam = { content : finalContent };
            } else {
                sendParam = { content : content };
            }
            apiUrl = "https://discordapp.com/api/v6/channels/" + this.channelId + "/messages";

            var tmp = this;
            xhr.onreadystatechange = function (evt) {
                if (evt.currentTarget.readyState == 1) {
                    xhr.setRequestHeader("authorization", tmp.myAuth);
                    xhr.setRequestHeader("authority", "discordapp.com");
                    xhr.setRequestHeader("content-type", "application/json");
                    xhr.send(JSON.stringify(sendParam));
                } else if (evt.currentTarget.readyState == 4) {
                    if (tmp.iterationsCount < iterations) {
                        clearTimeout(tmp.timeoutTimer);
                        tmp.iterationsCount++;
                        tmp.timeoutTimer = setTimeout(function () {
                            tmp.sendMessage(content, delay, iterations);
                        }, delay);
                    } else {
                        tmp.stopMessage();
                        if (tmp.loopIterationsCount > 0) {
                            tmp.timeoutTimer = setTimeout(function () {
                                tmp.loopPlay(content, delay, iterations, tmp.loopIterations);
                            }, delay);
                        }
                    }
                }
            }
            if (runFlag) {
                xhr.open("POST", apiUrl, false);
            }
            return "Message send start...";
        },
        
        loopPlay : function (content, delay, iterations, loopIterations) {
            if (this.loopIterations == 0) {
                this.loopIterations = loopIterations;
            }
            if (this.loopIterationsCount < loopIterations) {
                this.loopIterationsCount++;
                this.sendMessage(content, delay, iterations);
            } else {
                this.loopIterationsCount = 0;
                this.loopIterations = 0;
            }
            return "Loop message send start...";
        },

        init : function () {
            var iframe;
            if (window.localStorage === undefined) {
                iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                window.localStorage = iframe.contentWindow.localStorage;
                this.myAuth = localStorage.getItem("token").replace(/\"/g, "");
                console.log("Authorization catch finished.");
            } else {
                if (this.myAuth == null) {
                    this.myAuth = localStorage.getItem("token").replace(/\"/g, "");
                    console.log("Authorization catch finished.");
                }
            }
            this.initStatus = true;
        },

        stopMessage : function () {
            this.iterationsCount = 0;
            clearTimeout(this.timeoutTimer);
            return "Send message is stopped.";
        },

        reset : function () {
            this.initStatus = false;
            this.stopMessage();
            return "Most parameters will reset...";
        },

        setEndSell : function (sellFlag) {
            this.sellFlag = sellFlag;
            if (sellFlag) {
                return "When fish or draw cmd finish. Sell all.";
            } else {
                return "When fish or draw cmd finish. Do Nothing.";
            }
        },
        
        setExecLogFlag : function (execLogFlag) {
            this.execLogFlag = execLogFlag;
            if (execLogFlag) {
                return "Execution log: on";
            } else {
                return "Execution log: off";
            }
        }
    }
}