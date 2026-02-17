const hasFlag = (args, flag) => {
  if (Array.isArray(flag)) {
    return flag.some((el) => args.includes(el));
  }

  return args.includes(flag);
};

const getParamValue = (args, param) => {
  const i = args.indexOf(param);

  if (i !== -1 && i < args.length - 1) {
    return args[i + 1];
  }

  return null;
};

const getLastValue = (args) => {
  const lastArg = args[args.length - 1];

  if (/^(ftp|http|https):\/\/[^ "]+$/.test(lastArg)) {
    console.log('do smth');
  }
};

module.exports = {
  hasFlag,
  getParamValue,
  getLastValue,
};
