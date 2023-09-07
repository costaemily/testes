const formatLableType = (value, formatValue, hideValue) => {
    if(formatValue === 'currency'){
        if(hideValue){
            return "R$ ******";
        }
        return value.toLocaleString('pt-br', { style: "currency", currency: "BRL" });
    }else if(hideValue){
        return "******";
    }
    return value;
}

module.exports = formatLableType;