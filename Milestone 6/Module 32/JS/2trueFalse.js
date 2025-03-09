function trueFalse(data) {
    if(data) {
        console.log(`${data} is True`);
    }
    else {
        console.log(`${data} is False`);
    }
}

trueFalse('');
trueFalse(' ');
trueFalse('false');
trueFalse(1);
trueFalse(0);
trueFalse({name:'Faysal'});
trueFalse({});
trueFalse([]);
trueFalse(null);
trueFalse(undefined);
trueFalse(!undefined);
trueFalse(NaN);