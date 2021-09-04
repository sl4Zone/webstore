class RelativeTime{#relativeTimeUnits;#relativeTimeFormatter;constructor(e){this.#relativeTimeUnits={year:31536e6,month:2628e6,day:864e5,hour:36e5,minute:6e4,second:1e3},this.#relativeTimeFormatter=this.#getNewFormatter(e)}#getNewFormatter(e){return new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"always",style:"long"})}setLanguage(e){this.#relativeTimeFormatter=this.#getNewFormatter(e)}getRelativeTime(e,t=new Date){const i=e-t;for(const e in this.#relativeTimeUnits)if(Math.abs(i)>this.#relativeTimeUnits[e]||"second"===e)return this.#relativeTimeFormatter.format(Math.round(i/this.#relativeTimeUnits[e]),e)}}