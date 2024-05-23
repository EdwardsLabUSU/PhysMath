window.phet.chipper.project = 'projectile-motion-drag';
window.phet.chipper.version = '1.0.0-dev.0';
window.phet.chipper.buildTimestamp = '2024-05-23 02:31:08 UTC';
window.phet.chipper.brand = 'adapted-from-phet';
window.phet.chipper.locale = 'en';
window.phet.chipper.dependencies = {
  "comment": "# projectile-motion-drag 1.0.0-dev.0 Wed May 22 2024 22:31:13 GMT-0400 (Eastern Daylight Time)",
  "assert": {
    "sha": "347e7eeac1424adb6023fb06a619d6ea01a0620f",
    "branch": "main"
  },
  "axon": {
    "sha": "81d0afd108b199acddcfa53e4837e707d5f45415",
    "branch": "main"
  },
  "brand": {
    "sha": "bc7d44b6d80d8fa0b141de0d8c86e992dc23330f",
    "branch": "main"
  },
  "chipper": {
    "sha": "33ef1c9be647758147e9a542579b33de9dccb60b",
    "branch": "main"
  },
  "dot": {
    "sha": "5e3408d31dd5725a508b9858c4ef9ebbc4c5c017",
    "branch": "main"
  },
  "joist": {
    "sha": "4baad0f78da7537411ad4ecf58df965b9f6f8409",
    "branch": "main"
  },
  "kite": {
    "sha": "95334c8a27f629e18fa33d550e1321fccb821a9a",
    "branch": "main"
  },
  "perennial-alias": {
    "sha": "89a59a976596404533605544ed5485aa4b4165e8",
    "branch": "main"
  },
  "phet-core": {
    "sha": "12eaf5707ec639e8d255d40848dc1d06029d5576",
    "branch": "main"
  },
  "phetcommon": {
    "sha": "0b0a0c48efc035e95b1d20fb0a8052598fe2fa7a",
    "branch": "main"
  },
  "phetmarks": {
    "sha": "a3fac319d2781905952fe0f8b9538fe444734639",
    "branch": "main"
  },
  "projectile-motion-drag": {
    "sha": "10aaf4f72d743596483236a0c71392646e58769f",
    "branch": "master"
  },
  "query-string-machine": {
    "sha": "a14814a454f8924b33d0d1494afd3790ed87cb97",
    "branch": "main"
  },
  "scenery": {
    "sha": "8fff718b6cc5a1352c9023a718d7a68db0b03ab4",
    "branch": "main"
  },
  "scenery-phet": {
    "sha": "a1684733ba1f58c6a5140e0e11f8caa9cb797aa8",
    "branch": "main"
  },
  "sherpa": {
    "sha": "ddbebc40fd0137f82235ca6ba079dd473bd5b2e6",
    "branch": "main"
  },
  "sun": {
    "sha": "76c9802a4c519df3e169592434597cad18cf600f",
    "branch": "main"
  },
  "tambo": {
    "sha": "df70ebcb1f95e473620f0f2bafcac079ed2c9ebe",
    "branch": "main"
  },
  "tandem": {
    "sha": "239e2209e867e4b7168ee230ddb84c5efdd12c70",
    "branch": "main"
  },
  "twixt": {
    "sha": "9f72942cf16f432fd68f0a09db941e9462ec4adb",
    "branch": "main"
  },
  "utterance-queue": {
    "sha": "5626986d12235861f6ed504fa57b62575ecab57e",
    "branch": "main"
  }
};
window.phet.chipper.strings = (y=>{let m={};let x=[];let s=[];let X=null;let S=null;let e=null;let t=new Set();let k=null;let f=String.fromCharCode;let A=f(1);let B=f(2);let C=f(3);let D=f(4);let E=f(5);let F=f(6);let G=f(7);let H=f(8);let I=f(9);let J=f(0xA);let K=f(0xB);let L=f(0xC);let M=f(0xD);let N=f(0xE);let O=f(0xF);let a=q=>{S=q;m[X][k]=q;if(X=='en'){e=q;}t.add(X);};let j=0;let b=y.split(/(?:)/u);let r=()=>{let q='';while(j<b.length){let d=b[j];let p=d.codePointAt(0);if(p>0x10){q+=d;j++;}else if(p==0x10){q+=b[j+1];j+=2;}else{break;}}return q;};while(j<b.length){let c=b[j++];if(c==A){s.push(r());}else if(c==B){s.push(r()+'/');}else if(c==C){s.push(r()+'.');}else if(c==D){s.pop();}else if(c==E){s.pop();s.push(r());}else if(c==F){s.pop();s.push(r()+'/');}else if(c==G){s.pop();s.push(r()+'.');}else if(c==H){X=r();}else if(c==I){t.clear();e=null;k=s.join('');}else if(c==J){for(let i=0;i<x.length;i++){let l=x[i];if(!t.has(l)){m[l][k]=e;}}}else if(c==K){a(r());}else if(c==L){a(`‪${r()}‬`);}else if(c==M){a(`‫${r()}‬`);}else if(c==N){a(S);}else if(c==O){let l=r();m[l]={};x.push(l);}}return m;})('enJOISTa11yhome	enHome\nScreenButtonDetailsPattern	On {{name}}, {{screenHint}}\nDescription	Go to Home Screen.\nPattern	Welcome to {{name}}. It has {{screens}} interactive screens that you can explore.\nHint	Choose a screen to start exploring.\nIntroPattern	{{description}} {{hint}}\nkeyboardHelpkeyboardShortcuts	Keyboard Shortcuts\ntabToGetStarted	Tab to get started.\nphetMenu	PhET Menu\npreferencestabsaudiosoundsextraSoundsextraSoundsOff	Extra Sounds off.\nn	Extra Sounds on.\nsoundsOff	Sounds off.\nn	Sounds on.\nvoicingcustomizeVoicecollapsedAlert	Customize Voice, collapsed\nexpandedAlert	Customize Voice, expanded\npitchtitle	Pitch\nratelabelString	Voice Rate\nrangeDescriptionsaboveNormal	above normal range\nhigh	in high range\nlow	in low range\nnormal	in normal range\nvoiceRateNormal	normal\ntitle	Rate\ntitle	Customize Voice\nvariablesPattern	{{value}}x\nvoicenoVoicesAvailable	No voices available\ntitle	Voice\nPattern	Voice: {{value}}\nwrittenVariablesPattern	{{value}} times\nsimVoicingOptionscontextChangesdisabledAlert	Surrounding context changes muted.\nenabledAlert	Voicing surrounding context changes.\nlabel	Voice surrounding context changes\ndescription	Choose details you want voiced as you interact.\nhelpfulHintsdisabledAlert	Extra help muted.\nenabledAlert	Voicing extra help.\nlabel	Voice helpful hints\nobjectDetailsdisabledAlert	Object details and changes muted.\nenabledAlert	Voicing object details and changes.\nlabel	Voice object details and changes\ntitle	Sim Voicing Options\ntitle	Voicing\ntoolbartitle	Toolbar\ntoolbarAdded	Toolbar added to sim.\nRemoved	Toolbar removed.\nvoicingOff	Voicing off.\nOnlyAvailableInEnglish	Voicing off. Only available in English.\nvoicingOn	Voicing on.\ninputgestureControldisabledAlert	Custom taps and swipes off.\nenabledAlert	Custom taps and swipes on.\nlabelledDescriptionPattern	{{label}}, {{description}}\nlocalizationlanguageSelectiondescription	Change language to translate on-screen text. Additional descriptions, when present, remain in English.\nlabel	Languages\nnguageChangeResponsePattern	On-screen text now in {{language}}.\ntabResponsePattern	Preferences, {{title}} Tab\nvisualinteractiveHighlightsdisabledAlert	Highlights off for mouse and touch.\nenabledAlert	Highlights on for all input.\nscreenNamePattern	{{name}} Screen\nSimPattern	{{screenName}}, {{simName}}\nsimResources	Sim Resources\nScreen	Sim Screen\ns	Sim Screens\nsoundTogglealertsimSoundOff	Audio Features off.\nn	Audio Features on.\nlabel	All Audio\ntoolbarcloseToolbar	Close Toolbar\nhideToolbar	Hide Toolbar\nopenToolbar	Open Toolbar\nshowToolbar	Show Toolbar\ntitle	Toolbar\ntoolbarHidden	Toolbar hidden.\nShown	Toolbar Shown.\nvoicingdetailsLabel	Details\nhintLabel	Hint\noverviewLabel	Overview\nplayDetailsLabel	Play Details\nHintLabel	Play Hint\nOverviewLabel	Play Overview\nquickInfo	Quick Info\nsimVoicingOffAlert	Sim Voicing off.\nnAlert	Sim Voicing on.\ntitle	Sim Voicing\ncreditscontributors	Contributors: {0}\ngraphicArts	Graphic Arts: {0}\nleadDesign	Lead Design: {0}\nqualityAssurance	Quality Assurance: {0}\nsoftwareDevelopment	Software Development: {0}\nundDesign	Sound Design: {0}\nteam	Team: {0}\nthanks	Thanks\ntitle	Credits\nkeyboardShortcutstitle	Keyboard Shortcuts\ntoGetStarted	to get started\nmenuItemabout	About…\nfullscreen	Full Screen\ngetUpdate	Check for Updates…\nphetWebsite	PhET Website…\nreportAProblem	Report a Problem…\nscreenshot	Screenshot\npreferencestabsaudioaudioFeaturestitle	Audio Features\nsoundsdescription	Play sonifications and sound effects as you interact.\nextraSoundsdescription	Play additional sound that may be helpful for some learners.\ntitle	Extra Sounds\ntitle	Sounds\ntitle	Audio\nvoicingdescription	Voice and highlight content as you interact.\ntitleEnglishOnly	Voicing (English Only)\ngeneralaccessibilityIntro	We are adding features to our simulations to make them more inclusive. Some of these features support accessibility for learners with diverse needs and within diverse environments. Explore this menu to review or change the default presentation settings.\nmoreAccessibility	To find other simulations with inclusive features, look for Access and Inclusion on the simulation filter page and filter by inclusive feature.\ninputtitle	Input\nlocalizationregionAndCultureafrica	Africa\nModest	Africa (Modest)\nasia	Asia\ndescription	Select the portrayal of people, places, or objects in the sim. Images are not intended to represent the entire diversity of a region or culture.\nlatinAmerica	Latin America\noceania	Oceania\nrandom	Random\ntitle	Region and Culture\nunitedStatesOfAmerica	United States of America\ntitle	Localization\noverviewtitle	Overview\nsimulationtitle	Simulation\nvisualinteractiveHighlights	Interactive Highlights\nDescription	Add visual highlights for mouse and touch as you interact.\nprojectorModeDescription	Increase color contrast for better visibility in classrooms.\ntitle	Visual\ntitle	Preferences\nprojectorMode	Projector Mode\nqueryParametersWarningDialoginvalidQueryParameters	Invalid Query Parameters\noneOrMoreQueryParameters	One or more of these query parameters have<br>invalid values:\ntheSimulationWillStart	The simulation will start with default values for<br>those query parameters.\nsimTitleWithScreenNamePattern	{{simName}} — {{screenName}}\nupdateschecking	Checking for updates…\ngetUpdate	Get Update…\nnewVersionAvailable	There is a new version available: {0}.\nnoThanks	No Thanks\noffline	Unable to check for updates.\noutOfDate	New version available\nupToDate	This simulation is up to date.\nyourCurrentVersion	Your current version is: {0}.\nversionPattern	version {0}\nPROJECTILE_MOTION_DRAGprojectile-motion-dragtitle	Projectile Motion Drag\nscreenname	\nSCENERY_PHETa11yclose	Close\nkeyboardHelpDialoggeneralexitDialogDescription	Exit a dialog with Escape key.\ngroupNavigationDescription	Move between items in a group with Left and Right arrow keys or Up and Down arrow keys.\npressButtonsDescription	Press buttons with Space or Enter keys.\nresetAllDescriptionPattern	Reset All with {{altOrOption}} plus R.\nsetValuesInKeypadDescription	Set values within keypad using number keys 0-9.\nshiftTabGroupDescription	Move to previous item or group with Shift plus Tab key.\ntabGroupDescription	Move to next item or group with Tab key.\ntoggleCheckboxesDescription	Toggle checkboxes with Space key.\nmeasuringTape	Measuring Tape\nTip	Measuring Tape Tip\nplayControlButtonplay	Play\nstop	Stop\nresetAllalert	Sim screen restarted. Everything reset.\nlabel	Reset All\nsimSectioncontrolArea	Control Area\nplayArea	Play Area\nscreenSummarykeyboardShortcutsHint	If needed, check out keyboard shortcuts under Sim Resources.\nmultiScreenIntro	The {{screen}} changes as you play with it. It has a Play Area and a Control Area.\nsingleScreenIntroPattern	{{sim}} is an interactive sim. It changes as you play with it. It has a Play Area and a Control Area.\nvoicingresetAllcontextResponse	Everything Reset.\nkeya	A\nlt	Alt\nc	C\napsLock	Caps Lock\nd	D\nend	End\nter	Enter\nesc	Esc\nfn	Fn\nhome	Home\nk	K\nl	L\none	1\noption	Option\npageDown	Pg Dn\nUp	Pg Up\nr	R\ns	S\nhift	Shift\npace	Space\ntab	Tab\nthree	3\ntwo	2\nw	W\nkeyboardHelpDialogbasicActions	Basic Actions\nexitADialog	Exit a dialog\nhyphen	-\nmoveBetweenItemsInAGroup	Move between items in a group\nToNextItemOrGroup	Move to next item or group\nPreviousItemOrGroup	Move to previous item or group\nor	or\npressButtons	Press buttons\nresetAll	Reset All\nsetValuesInKeypad	Set values within keypad\ntoggleCheckboxes	Toggle checkboxes\nmeasuringTapeReadoutPattern	{{distance}} {{units}}\nSUNa11yclose	Close\nd	Closed\ntitleClosePattern	{{title}}, Close.\n');
window.phet.chipper.stringMetadata = {"JOIST/simTitleWithScreenNamePattern":{"phetioDocumentation":"This pattern is used when a multi-screen simulation is only displaying one screen."},"JOIST/versionPattern":{"phetioReadOnly":true},"JOIST/credits.title":{"phetioReadOnly":true},"JOIST/credits.leadDesign":{"phetioReadOnly":true},"JOIST/credits.softwareDevelopment":{"phetioReadOnly":true},"JOIST/credits.team":{"phetioReadOnly":true},"JOIST/credits.contributors":{"phetioReadOnly":true},"JOIST/credits.qualityAssurance":{"phetioReadOnly":true},"JOIST/credits.graphicArts":{"phetioReadOnly":true},"JOIST/credits.soundDesign":{"phetioReadOnly":true},"JOIST/credits.thanks":{"phetioReadOnly":true}};
window.phet.chipper.isDebugBuild = false;
window.phet.chipper.allowLocaleSwitching = true;
window.phet.chipper.packageObject = {"name":"projectile-motion-drag","version":"1.0.0-dev.0","license":"GPL-3.0","repository":{"type":"git","url":"https://github.com/phetsims/projectile-motion-drag.git"},"devDependencies":{"grunt":"~1.5.3"},"phet":{"requirejsNamespace":"PROJECTILE_MOTION_DRAG","simulation":true,"runnable":true,"preload":["../sherpa/lib/poly-decomp-0.3.0.js","../sherpa/lib/p2-0.7.1.js","../sherpa/lib/three-r104.js","../projectile-motion-drag/js/common/simData.js","../projectile-motion-drag/js/common/bundle2.js","../projectile-motion-drag/js/common/d3.v7.min.js","../projectile-motion-drag/js/common/mathquill.js"],"supportedBrands":["phet","adapted-from-phet"],"supportsOutputJS":true,"simFeatures":{"supportsDynamicLocale":true}},"eslintConfig":{"extends":"../chipper/eslint/sim_eslintrc.js","overrides":[{"files":["**/*.ts"],"rules":{"@typescript-eslint/no-explicit-any":"error","@typescript-eslint/ban-ts-comment":["error",{"ts-expect-error":true,"ts-ignore":true,"ts-check":true,"ts-nocheck":true}]}}]}};
// Copyright 2018-2021, University of Colorado Boulder
/**
 * Detects if the browser in use is Internet Explorer, and shows an error page if so.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */ // constants
var CSS_STYLING="#ie-error-container {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100vh;\n    width: 100vw;\n    background: white;\n    z-index: 1000000;\n    align-items: center;\n  }\n\n  #ie-error {\n    position: relative;\n    border-radius: 10px;\n    max-width: 550px;\n    margin: auto;\n    padding: 30px;\n    font-size: 20px;\n    font-weight: 500;\n    font-family: sans-serif;\n    text-align: center;\n  }\n\n  #ie-error .header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 46px;\n  }\n\n  #ie-error .header .h1 {\n    font-size: 30px;\n    font-weight: 500;\n    margin: 0 0 0 10px;\n  }\n\n  #ie-error .header svg {\n    width: 36px;\n  }\n\n  #ie-error p {\n    margin: 14px 0;\n  }";var ERROR_ICON_SVG="<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 27.75 24.44\">\n     <g>\n       <path style=\"fill:red\" d=\"M12.52,0.78L0.21,22.1c-0.6,1.04,0.15,2.34,1.35,2.34h24.62c1.2,0,1.95-1.3,1.35-2.34L15.22,0.78\n         C14.62-0.26,13.12-0.26,12.52,0.78z\"/>\n       <g>\n         <path style=\"fill:white\" d=\"M13.45,17.19c-1.13-6.12-1.7-9.42-1.7-9.9c0-0.59,0.22-1.07,0.65-1.43c0.44-0.36,0.93-0.54,1.48-0.54\n           c0.59,0,1.09,0.19,1.5,0.58C15.79,6.29,16,6.74,16,7.27c0,0.5-0.57,3.81-1.7,9.92H13.45z M15.75,20.46c0,0.52-0.18,0.97-0.55,1.34\n           c-0.37,0.37-0.81,0.55-1.32,0.55c-0.52,0-0.97-0.19-1.33-0.55c-0.37-0.37-0.55-0.81-0.55-1.34c0-0.51,0.18-0.95,0.55-1.32\n           c0.37-0.37,0.81-0.55,1.33-0.55c0.51,0,0.95,0.18,1.32,0.55C15.57,19.5,15.75,19.94,15.75,20.46z\"/>\n       </g>\n     </g>\n   </svg>";// Detect which version of IE is in use. Remains -1 if not using IE. Copied from phet-core/platform.js.
var userAgent=window.navigator.userAgent;var releaseVersion=-1;var regex=null;if(window.navigator.appName==='Microsoft Internet Explorer'){regex=new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');if(regex.exec(userAgent)!==null){releaseVersion=parseFloat(RegExp.$1);}}else if(window.navigator.appName==='Netscape'){regex=new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');if(regex.exec(userAgent)!==null){releaseVersion=parseFloat(RegExp.$1);}}// Browser is IE, so set a global to alert other scripts and show the error message. Can also be revealed with the
// flag `showInternetExplorerError`
if(releaseVersion!==-1||window.location.search.indexOf('showInternetExplorerError')>=0){// create the html elements dynamically
var ieErrorStyling=document.createElement('style');ieErrorStyling.innerHTML=CSS_STYLING;var ieErrorContainer=document.createElement('div');ieErrorContainer.id='ie-error-container';var ieError=document.createElement('div');ieError.id='ie-error';var header=document.createElement('div');header.className='header';var ieErrorHeader=document.createElement('h1');ieErrorHeader.id='ie-error-header';ieErrorHeader.className='h1';var ieErrorNotSupported=document.createElement('p');ieErrorNotSupported.id='ie-error-not-supported';var ieErrorDifferentBrowser=document.createElement('p');ieErrorDifferentBrowser.id='ie-error-header';// get the locale specified as a query parameter, if there is one
var localeRegEx=/locale=[a-z]{2}(_[A-Z]{2}){0,1}/g;var localeQueryParameterMatches=window.location.search.match(localeRegEx)||[];var localeQueryParameter=localeQueryParameterMatches.length?localeQueryParameterMatches[0]:null;var localeQueryParameterValue=localeQueryParameter?localeQueryParameter.split('=')[1]:null;// Prioritize the locale specified as a query parameter, otherwise fallback to the built locale. Then get the strings
// in that locale.
var locale=localeQueryParameterValue&&window.phet.chipper.strings[localeQueryParameterValue]?localeQueryParameterValue:window.phet.chipper.locale;var strings=window.phet.chipper.strings[locale];// fill in the translated strings
ieErrorHeader.innerText=strings['JOIST/ieErrorPage.platformError'];ieErrorNotSupported.innerText=strings['JOIST/ieErrorPage.ieIsNotSupported'];ieErrorDifferentBrowser.innerText=strings['JOIST/ieErrorPage.useDifferentBrowser'];// add the html elements to the page
header.innerHTML=ERROR_ICON_SVG;header.appendChild(ieErrorHeader);ieError.appendChild(header);ieError.appendChild(ieErrorNotSupported);ieError.appendChild(ieErrorDifferentBrowser);ieErrorContainer.appendChild(ieError);document.body.appendChild(ieErrorStyling);document.body.appendChild(ieErrorContainer);// reveal the error
document.getElementById('ie-error-container').style.display='flex';}