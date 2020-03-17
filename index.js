var katzDeliLine = [];
let ticketCount = 0;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(++ticketCount);
  return "You are number " + ticketCount + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length>0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0) {
    let str = "The line is currently: ";
    for (let i = 0; i<katzDeliLine.length; i++) {
      str += i+1 + ". " + katzDeliLine[i] + ", ";
    }
    return str.substring(0, str.length-2);
  } else {
    return "The line is currently empty."
  }
}