const evenbus = {
  on(event : string, callback : any) {
    //@ts-ignore
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event : string, data : any) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event : string, callback : any
    ) {
    document.removeEventListener(event, callback);
  },
};

export default evenbus;
