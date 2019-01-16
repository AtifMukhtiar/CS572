var mainStatement = "you are a good and nice person";
String.prototype.question1 = function (parameters) {
    var banedWords = parameters;

    let statement = this;
    banedWords.filter(
        function (value) {
            statement = statement.replace(value, "***")
        }
    );

    console.log(statement);


}

String.prototype.question2 = function (parameters) {
    let statement = this;
    let bannedWords = parameters;
    let promise = new Promise(function (resolver, rejection) {


        bannedWords.forEach(function (word) {
            statement = statement.replace(word, "***")
        });
        resolver(statement);


    });

    function success(statement) {
        console.log(statement)
    }

    promise.then(success)
        .catch((err) => {
            console.log(`Catch  ${err}`);
        });

}

/*Question 3*/


function returningPromise(statement, parameters) {
    let banedWords = parameters;
    return new Promise(function (resolver, rejection) {
        banedWords.forEach(function (word) {
            statement = statement.replace(word, "***")
        });
        resolver(statement);


    });
}

String.prototype.question3 = async function (parameters) {
    try {
        let result = await returningPromise(this, parameters);
        console.log(result);
    } catch (err) {
        console.log(err)
    }
};

mainStatement.question1(["good", "nice"]);
mainStatement.question2(["good", "nice"]);
mainStatement.question3(["good", "nice"]);
