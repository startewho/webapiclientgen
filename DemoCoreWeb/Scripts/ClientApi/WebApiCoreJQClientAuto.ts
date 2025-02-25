///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="HttpClient.ts" />
namespace DemoWebApi_DemoData_Client {
	export interface Address {
		city?: string;
		country?: string;
		id?: string;
		postalCode?: string;
		state?: string;
		street1?: string;
		street2?: string;
		type?: DemoWebApi_DemoData_Client.AddressType;

		/**
		 * It is a field
		 */
		location?: DemoWebApi_DemoData_Another_Client.MyPoint;
	}

	export enum AddressType { Postal, Residential }

	export interface Company extends DemoWebApi_DemoData_Client.Entity {

		/**
		 * BusinessNumber to be serialized as BusinessNum
		 */
		BusinessNum?: string;
		businessNumberType?: string;
		foundDate?: Date;
		registerDate?: Date;
		textMatrix?: Array<Array<string>>;
		int2D?: number[][];
		int2DJagged?: Array<Array<number>>;
		lines?: Array<string>;
	}

	export enum Days {
		Sat = 1,
		Sun = 2,
		Mon = 3,
		Tue = 4,
		Wed = 5,

		/**
		 * Thursday
		 */
		Thu = 6,
		Fri = 7
	}


	/**
	 * Base class of company and person
	 */
	export interface Entity {

		/**
		 * Multiple addresses
		 */
		addresses?: Array<DemoWebApi_DemoData_Client.Address>;
		id?: string;

		/**
		 * Name of the entity.
		 */
		name: string;
		phoneNumbers?: Array<DemoWebApi_DemoData_Client.PhoneNumber>;
		web?: string;
	}


	/**
	 * To test different serializations against Guid
	 */
	export interface IdMap {
		id?: string;
		idNotEmitDefaultValue?: string;
		nullableId?: string;
		requiredName: string;
		text?: string;
	}

	export enum MedicalContraindiationResponseTypeReason { M = "Mm", S = "Ss", P = "Pp", I = "I", A = "A" }

	export enum MedicalContraindiationResponseTypeTypeCode { P = "P", T = "Tt" }

	export interface MimsPackage {
		kk?: number;

		/**
		 * Having an initialized value in the property is not like defining a DefaultValueAttribute. Such intialization happens at run time,
		 * and there's no reliable way for a codegen to know if the value is declared by the programmer, or is actually the natural default value like 0.
		 */
		kK2?: number;
		optionalEnum?: DemoWebApi_DemoData_Client.MyEnumType;
		optionalInt?: number;
		result?: DemoWebApi_DemoData_Client.MimsResult<number>;
		tag?: string;
	}

	export interface MimsResult<T> {
		generatedAt?: Date;
		message?: string;
		result?: T;
		success?: boolean;
	}

	export enum MyEnumType { First = 1, Two = 2 }

	export interface MyGeneric<T, K, U> {
		myK?: K;
		myT?: T;
		myU?: U;
		status?: string;
	}

	export interface MyPeopleDic {
		anotherDic?: {[id: string]: string };
		dic?: {[id: string]: DemoWebApi_DemoData_Client.Person };
		intDic?: {[id: number]: string };
	}

	export interface Person extends DemoWebApi_DemoData_Client.Entity {
		baptised?: Date;

		/**
		 * Date of Birth.
		 * This is optional.
		 */
		dob?: Date;
		givenName?: string;
		surname?: string;
	}

	export interface PhoneNumber {
		fullNumber?: string;
		phoneType?: DemoWebApi_DemoData_Client.PhoneType;
	}


	/**
	 * Phone type
	 * Tel, Mobile, Skyp and Fax
	 */
	export enum PhoneType {

		/**
		 * Land line
		 */
		Tel,

		/**
		 * Mobile phone
		 */
		Mobile,
		Skype,
		Fax
	}

}

namespace DemoWebApi_DemoData_Another_Client {

	/**
	 * 2D position
	 * with X and Y
	 * for Demo
	 */
	export interface MyPoint {

		/**
		 * X
		 */
		x: number;

		/**
		 * Y
		 */
		y: number;
	}

}

namespace DemoWebApi_Models_Client {
	export interface AddExternalLoginBindingModel {
		externalAccessToken?: string;
	}

	export interface ChangePasswordBindingModel {
		confirmPassword?: string;
		newPassword?: string;
		OldPwd: string;
	}

	export interface RegisterBindingModel {
		confirmPassword?: string;
		email?: string;
		password?: string;
	}

	export interface RegisterExternalBindingModel {
		email?: string;
	}

	export interface RemoveLoginBindingModel {
		loginProvider?: string;
		providerKey?: string;
	}

	export interface SetPasswordBindingModel {
		confirmPassword?: string;
		newPassword?: string;
	}


	/**
	 * Auth token
	 */
	export interface TokenResponseModel {
		access_token?: string;
		expires?: string;
		expires_in?: number;
		issued?: string;
		token_type?: string;
		username?: string;
	}

}

namespace DemoWebApi_Controllers_Client {

	/**
	 * This class is used to carry the result of various file uploads.
	 */
	export interface FileResult {

		/**
		 * Gets or sets the local path of the file saved on the server.
		 */
		fileNames?: Array<string>;

		/**
		 * Gets or sets the submitter as indicated in the HTML form used to upload the data.
		 */
		submitter?: string;
	}


	/**
	 * Complex hero type
	 */
	export interface Hero {
		death?: Date;
		dob?: Date;
		id?: number;
		name?: string;
	}

	export interface SuperHero extends DemoWebApi_Controllers_Client.Hero {
		super?: boolean;
	}

}

namespace DemoCoreWeb_Controllers_Client {
	export class SpecialTypes {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Anonymous Dynamic of C#
		 * GET api/SpecialTypes/AnonymousDynamic
		 * @return {any} dyanmic things
		 */
		getAnonymousDynamic(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SpecialTypes/AnonymousDynamic', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Async function returing dynamic
		 * GET api/SpecialTypes/AnonymousDynamic2
		 */
		getAnonymousDynamic2(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SpecialTypes/AnonymousDynamic2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SpecialTypes/AnonymousObject
		 */
		getAnonymousObject(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SpecialTypes/AnonymousObject', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Async function returning object
		 * GET api/SpecialTypes/AnonymousObject2
		 */
		getAnonymousObject2(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SpecialTypes/AnonymousObject2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * POST api/SpecialTypes/AnonymousObject
		 */
		postAnonymousObject(obj: any, callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SpecialTypes/AnonymousObject', obj, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Async returning object, Post dynamic
		 * POST api/SpecialTypes/AnonymousObject2
		 */
		postAnonymousObject2(obj: any, callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SpecialTypes/AnonymousObject2', obj, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

namespace DemoWebApi_Controllers_Client {
	export class DateTypes {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * GET api/DateTypes/GetDateOnlyMin
		 */
		getDateOnlyMin(callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/GetDateOnlyMin', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/DateTypes/NullableDatetime/{hasValue}
		 */
		getDateTime(hasValue: boolean, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/NullableDatetime/' + hasValue, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * return DateTimeOffset.Now
		 * GET api/DateTypes/ForDateTimeOffset
		 */
		getDateTimeOffset(callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/ForDateTimeOffset', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/DateTypes/NextHour/{dt}
		 */
		getNextHour(dt: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/NextHour/' + dt?.toISOString(), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * If Dt is not defined, add a hour from now
		 * GET api/DateTypes/NextHourNullable?n={n}&dt={dt}
		 */
		getNextHourNullable(n: number, dt: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/NextHourNullable?n=' + n + (dt ? '&dt=' + dt?.toISOString() : ''), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/DateTypes/NextYear/{dt}
		 */
		getNextYear(dt: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/NextYear/' + dt?.toISOString(), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * If Dt is not defined, add a year from now
		 * GET api/DateTypes/NextYearNullable?n={n}&dt={dt}
		 */
		getNextYearNullable(n: number, dt: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/NextYearNullable?n=' + n + (dt ? '&dt=' + dt?.toISOString() : ''), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Client should send DateTime.Date
		 * POST api/DateTypes/IsDateTimeDate
		 */
		isDateTimeDate(dt: Date, callback: (data : {item1: Date, item2: Date}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/IsDateTimeDate', dt, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/IsDateTimeOffsetDate
		 */
		isDateTimeOffsetDate(dt: Date, callback: (data : {item1: Date, item2: Date}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/IsDateTimeOffsetDate', dt, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/ForDateOnly
		 */
		postDateOnly(d: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/ForDateOnly', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/DateOnlyNullable
		 */
		postDateOnlyNullable(d: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/DateOnlyNullable', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/ForDateTime
		 */
		postDateTime(d: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/ForDateTime', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * return d;
		 * POST api/DateTypes/ForDateTimeOffset
		 */
		postDateTimeOffset(d: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/ForDateTimeOffset', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * return d.ToString("O")
		 * POST api/DateTypes/ForDateTimeOffsetForO
		 */
		postDateTimeOffsetForO(d: Date, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/ForDateTimeOffsetForO', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/ForDateTimeOffsetForOffset
		 */
		postDateTimeOffsetForOffset(d: Date, callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/ForDateTimeOffsetForOffset', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Returned is DateTimeOffset?
		 * POST api/DateTypes/DateTimeOffsetNullable
		 */
		postDateTimeOffsetNullable(d: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/DateTimeOffsetNullable', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/ForDateTimeOffsetStringForOffset
		 */
		postDateTimeOffsetStringForOffset(s: string, callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/ForDateTimeOffsetStringForOffset', s, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/DateTypes/NextYear
		 */
		postNextYear(dt: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/DateTypes/NextYear', dt, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * GET api/DateTypes/DateOnlyStringQuery?d={d}
		 */
		queryDateOnlyAsString(d: string, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/DateOnlyStringQuery?d=' + (!d ? '' : encodeURIComponent(d)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/DateTypes/RouteDateTimeOffset/{d}
		 */
		routeDateTimeOffset(d: Date, callback: (data : Date) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/RouteDateTimeOffset/' + d?.toISOString(), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Return Tuple DateTime?, DateTime?
		 * GET api/DateTypes/SearchDateRange?startDate={startDate}&endDate={endDate}
		 * @param {Date} startDate DateTime? startDate = null
		 * @param {Date} endDate DateTime? endDate = null
		 */
		searchDateRange(startDate: Date, endDate: Date, callback: (data : {item1: Date, item2: Date}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/DateTypes/SearchDateRange?' + (startDate ? 'startDate=' + startDate?.toISOString() : '') + (endDate ? '&endDate=' + endDate?.toISOString() : ''), callback, this.error, this.statusCode, headersHandler);
		}
	}

	export class Entities {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * POST api/Entities/createCompany
		 */
		createCompany(p: DemoWebApi_DemoData_Client.Company, callback: (data : DemoWebApi_DemoData_Client.Company) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/createCompany', p, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Entities/createPerson
		 */
		createPerson(p: DemoWebApi_DemoData_Client.Person, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/createPerson', p, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Entities/createPerson2
		 */
		createPerson2(p: DemoWebApi_DemoData_Client.Person, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/createPerson2', p, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Entities/createPerson3
		 */
		createPerson3(p: DemoWebApi_DemoData_Client.Person, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/createPerson3', p, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * DELETE api/Entities/{id}
		 */
		delete(id: number, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'api/Entities/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Entities/Company/{id}
		 */
		getCompany(id: number, callback: (data : DemoWebApi_DemoData_Client.Company) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Entities/Company/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * POST api/Entities/Mims
		 */
		getMims(p: DemoWebApi_DemoData_Client.MimsPackage, callback: (data : DemoWebApi_DemoData_Client.MimsResult<string>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/Mims', p, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post MyGeneric string, decimal, double
		 * POST api/Entities/MyGeneric
		 */
		getMyGeneric(s: DemoWebApi_DemoData_Client.MyGeneric<string, number, number>, callback: (data : DemoWebApi_DemoData_Client.MyGeneric<string, number, number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/MyGeneric', s, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post MyGeneric string, decimal, Person
		 * POST api/Entities/MyGenericPerson
		 */
		getMyGenericPerson(s: DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>, callback: (data : DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/MyGenericPerson', s, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Return empty body, status 204. MaybeNull
		 * GET api/Entities/NullCompany
		 */
		getNullCompany(callback: (data : DemoWebApi_DemoData_Client.Company) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Entities/NullCompany', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get a person
		 * so to know the person
		 * GET api/Entities/getPerson/{id}
		 * @param {number} id unique id of that guy
		 * @return {DemoWebApi_DemoData_Client.Person} person in db
		 */
		getPerson(id: number, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Entities/getPerson/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Entities/getPerson2/{id}
		 */
		getPerson2(id: number, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Entities/getPerson2/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * PUT api/Entities/link?id={id}&relationship={relationship}
		 */
		linkPerson(id: number, relationship: string, person: DemoWebApi_DemoData_Client.Person, callback: (data : boolean) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'api/Entities/link?id=' + id + '&relationship=' + (!relationship ? '' : encodeURIComponent(relationship)), person, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * PATCH api/Entities/patchPerson
		 */
		patchPerson(person: DemoWebApi_DemoData_Client.Person, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.patch(this.baseUri + 'api/Entities/patchPerson', person, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Entities/IdMap
		 */
		postIdMap(idMap: DemoWebApi_DemoData_Client.IdMap, callback: (data : DemoWebApi_DemoData_Client.IdMap) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Entities/IdMap', idMap, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * PUT api/Entities/updatePerson
		 */
		updatePerson(person: DemoWebApi_DemoData_Client.Person, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'api/Entities/updatePerson', person, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export class Heroes {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * DELETE api/Heroes/{id}
		 */
		delete(id: number, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Heroes/asyncHeroes
		 */
		getAsyncHeroes(callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Heroes/asyncHeroes', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get a hero. Nullable reference. MaybeNull
		 * GET api/Heroes/{id}
		 */
		getHero(id: number, callback: (data : DemoWebApi_Controllers_Client.Hero) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get all heroes.
		 * GET api/Heroes
		 */
		getHeros(callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Heroes', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * MaybeNull
		 * GET api/Heroes/super?id={id}
		 */
		getSuperHero(id: number, callback: (data : DemoWebApi_Controllers_Client.SuperHero) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Heroes/super?id=' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * POST api/Heroes
		 */
		post(name: string, callback: (data : DemoWebApi_Controllers_Client.Hero) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Heroes', name, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Add a hero. The client will not expect null. NotNull
		 * POST api/Heroes/q?name={name}
		 * @return {DemoWebApi_Controllers_Client.Hero} Always object.
		 */
		postWithQuery(name: string, callback: (data : DemoWebApi_Controllers_Client.Hero) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Heroes/q?name=' + (!name ? '' : encodeURIComponent(name)), null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update hero.
		 * PUT api/Heroes
		 */
		put(hero: DemoWebApi_Controllers_Client.Hero, callback: (data : DemoWebApi_Controllers_Client.Hero) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'api/Heroes', hero, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Search heroes
		 * GET api/Heroes/search/{name}
		 * @param {string} name keyword contained in hero name.
		 * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
		 */
		search(name: string, callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Heroes/search/' + (!name ? '' : encodeURIComponent(name)), callback, this.error, this.statusCode, headersHandler);
		}
	}

	export class StringData {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Athlethe Search
		 * GET api/StringData/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
		 * @param {number} take Generic optional parameter. Default 10
		 * @param {number} skip Default 0
		 * @param {string} order default null
		 */
		athletheSearch(take: number, skip: number, order: string, sort: string, search: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/StringData/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (!order ? '' : encodeURIComponent(order)) + '&sort=' + (!sort ? '' : encodeURIComponent(sort)) + '&search=' + (!search ? '' : encodeURIComponent(search)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/StringData/String
		 */
		getABCDE(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/StringData/String', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Return empty string JSON object. Status 200.
		 * GET api/StringData/EmptyString
		 */
		getEmptyString(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/StringData/EmptyString', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Return empty body with status 204 No Content, even though the default mime type is application/json. MaybeNull
		 * GET api/StringData/NullString
		 */
		getNullString(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/StringData/NullString', callback, this.error, this.statusCode, headersHandler);
		}
	}

	export class SuperDemo {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * GET api/SuperDemo/ActionResult
		 */
		getActionResult(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ActionResult', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/ActionResult2
		 */
		getActionResult2(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ActionResult2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/ActionStringResult
		 */
		getActionStringResult(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ActionStringResult', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/BadRequest
		 */
		getBadRequest(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/BadRequest', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/BadRequest2
		 */
		getBadRequest2(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/BadRequest2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/bool
		 */
		getBool(callback: (data : boolean) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/bool', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/byte
		 */
		getbyte(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/byte', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/ByteArray
		 */
		getByteArray(callback: (data : Array<number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ByteArray', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/char
		 */
		getChar(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/char', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/Collection
		 */
		getCollection(callback: (data : Array<DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/Collection', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/enumGet?d={d}
		 */
		getDay(d: DemoWebApi_DemoData_Client.Days, callback: (data : DemoWebApi_DemoData_Client.Days) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/enumGet?d=' + d, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/decimal
		 */
		getDecimal(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/decimal', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Demo
		 * GET api/SuperDemo/decimalArrayQ?a={a}
		 */
		getDecimalArrayQ(a: Array<number>, callback: (data : Array<number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/decimalArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/decimal/{d}
		 */
		getDecimalSquare(d: number, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/decimal/' + d, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/DecimalZero
		 */
		getDecimalZero(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/DecimalZero', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/StringStringDic
		 */
		getDictionary(callback: (data : {[id: string]: string }) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/StringStringDic', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/StringPersonDic
		 */
		getDictionaryOfPeople(callback: (data : {[id: string]: DemoWebApi_DemoData_Client.Person }) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/StringPersonDic', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/StringPersonDic2
		 */
		getDictionaryOfPeople2(callback: (data : {[id: string]: DemoWebApi_DemoData_Client.Person }) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/StringPersonDic2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/doulbe
		 */
		getdouble(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/doulbe', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Result of 0.1d + 0.2d - 0.3d
		 * GET api/SuperDemo/DoubleZero
		 */
		getDoubleZero(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/DoubleZero', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Demo IEnumerable Days
		 * GET api/SuperDemo/enumArrayDays?a={a}
		 */
		getEnumArrayDays(a: Array<DemoWebApi_DemoData_Client.Days>, callback: (data : Array<DemoWebApi_DemoData_Client.Days>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/enumArrayDays?'+a?.map(z => `a=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/enumArrayQ2?a={a}
		 */
		getEnumArrayQ2(a: Array<number>, callback: (data : Array<number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/enumArrayQ2?'+a?.map(z => `a=${z}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/FloatZero
		 */
		getFloatZero(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/FloatZero', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/ICollection
		 */
		getICollection(callback: (data : Array<DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ICollection', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/IList
		 */
		getIList(callback: (data : Array<DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/IList', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/int2d
		 */
		getInt2D(callback: (data : number[][]) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/int2d', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/int2dJagged
		 */
		getInt2DJagged(callback: (data : Array<Array<number>>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/int2dJagged', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/intArray
		 */
		getIntArray(callback: (data : Array<number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/intArray', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Demo int[];
		 * GET api/SuperDemo/intArrayQ?a={a}
		 */
		getIntArrayQ(a: Array<number>, callback: (data : Array<number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/intArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Demo IEnumerable long
		 * GET api/SuperDemo/intArrayQ2?a={a}
		 */
		getIntArrayQ2(a: Array<number>, callback: (data : Array<number>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/intArrayQ2?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/int/{d}
		 */
		getIntSquare(d: number, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/int/' + d, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/IReadOnlyCollection
		 */
		getIReadOnlyCollection(callback: (data : Array<DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/IReadOnlyList
		 */
		getIReadOnlyList(callback: (data : Array<DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/IReadOnlyList', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/KeyValuePair
		 */
		getKeyhValuePair(callback: (data : {key: string, value: DemoWebApi_DemoData_Client.Person }) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/KeyValuePair', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/List
		 */
		getList(callback: (data : Array<DemoWebApi_DemoData_Client.Person>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/List', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/NullableDecimal/{hasValue}
		 */
		getNullableDecimal(hasValue: boolean, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/NullableDecimal/' + hasValue, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * MaybeNull
		 * GET api/SuperDemo/NullObject
		 */
		getNullPerson(callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/NullObject', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
		 */
		getPrimitiveNullable(location: string, dd: number, de: number, callback: (data : {item1: string, item2: number, item3: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/DoubleNullable?location=' + (!location ? '' : encodeURIComponent(location)) + (dd ? '&dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
		 */
		getPrimitiveNullable2(dd: number, de: number, callback: (data : {item1: number, item2: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/DoubleNullable2?' + (dd ? 'dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/sbyte
		 */
		getsbyte(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/sbyte', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/short
		 */
		getShort(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/short', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Demo string array
		 * GET api/SuperDemo/stringArrayQ?a={a}
		 */
		getStringArrayQ(a: Array<string>, callback: (data : Array<string>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/stringArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Demo List string
		 * GET api/SuperDemo/stringArrayQ2?a={a}
		 */
		getStringArrayQ2(a: Array<string>, callback: (data : Array<string>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/stringArrayQ2?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * ActionResult with FileStreamResult
		 * GET api/SuperDemo/TextStream
		 */
		getTextStream(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/TextStream', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/uint
		 */
		getUint(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/uint', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/ulong
		 */
		getulong(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ulong', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/SuperDemo/ushort
		 */
		getUShort(callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/SuperDemo/ushort', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * POST api/SuperDemo/ActionResult
		 */
		postActionResult(callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/ActionResult', null, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/SuperDemo/PostActionResult2
		 */
		postActionResult2(s: string, callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/PostActionResult2', s, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/SuperDemo/PostActionResult3
		 */
		postActionResult3(person: DemoWebApi_DemoData_Client.Person, callback: (data : any) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/PostActionResult3', person, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post a collection of person
		 * POST api/SuperDemo/Collection
		 */
		postCollection(list: Array<DemoWebApi_DemoData_Client.Person>, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/Collection', list, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/SuperDemo/enumPost?d={d}
		 */
		postDay(d: DemoWebApi_DemoData_Client.Days, d2: DemoWebApi_DemoData_Client.Days, callback: (data : Array<DemoWebApi_DemoData_Client.Days>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/enumPost?d=' + d, d2, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Demo Dic string and person
		 * POST api/SuperDemo/StringPersonDic
		 */
		postDictionary(dic: {[id: string]: DemoWebApi_DemoData_Client.Person }, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/StringPersonDic', dic, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/SuperDemo/Guids
		 */
		postGuids(guids: Array<string>, callback: (data : Array<string>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/Guids', guids, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post ICollection of person
		 * POST api/SuperDemo/ICollection
		 */
		postICollection(list: Array<DemoWebApi_DemoData_Client.Person>, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/ICollection', list, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post IList of person
		 * POST api/SuperDemo/IList
		 */
		postIList(list: Array<DemoWebApi_DemoData_Client.Person>, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/IList', list, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/SuperDemo/int2d
		 */
		postInt2D(a: number[][], callback: (data : boolean) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/int2d', a, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Demo int[][]
		 * POST api/SuperDemo/int2djagged
		 */
		postInt2DJagged(a: Array<Array<number>>, callback: (data : boolean) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/int2djagged', a, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Demo int[]
		 * POST api/SuperDemo/intArray
		 */
		postIntArray(a: Array<number>, callback: (data : boolean) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/intArray', a, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post IReadOnlyCollection of person
		 * POST api/SuperDemo/IReadOnlyCollection
		 */
		postIReadOnlyCollection(list: Array<DemoWebApi_DemoData_Client.Person>, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', list, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post e of person
		 * POST api/SuperDemo/IReadOnlyList
		 */
		postIReadOnlyList(list: Array<DemoWebApi_DemoData_Client.Person>, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/IReadOnlyList', list, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post a list of person
		 * POST api/SuperDemo/List
		 */
		postList(list: Array<DemoWebApi_DemoData_Client.Person>, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/List', list, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/SuperDemo/PostEmpty/{i}
		 */
		postWithQueryButEmptyBody(s: string, i: number, callback: (data : {item1: string, item2: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/SuperDemo/PostEmpty/' + i, s, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export class TextData {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * GET api/TextData/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
		 */
		athletheSearch(take: number, skip: number, order: string, sort: string, search: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/TextData/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (!order ? '' : encodeURIComponent(order)) + '&sort=' + (!sort ? '' : encodeURIComponent(sort)) + '&search=' + (!search ? '' : encodeURIComponent(search)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/TextData/String
		 */
		getABCDE(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/TextData/String', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Return empty body with status 200.
		 * GET api/TextData/EmptyString
		 */
		getEmptyString(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/TextData/EmptyString', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * MaybeNull
		 * GET api/TextData/NullableString
		 */
		getNullableString(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/TextData/NullableString', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Return empty body with status 204 No Content.
		 * GET api/TextData/NullString
		 */
		getNullString(callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/TextData/NullString', callback, this.error, this.statusCode, headersHandler);
		}
	}

	export class Tuple {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * Update in a transaction
		 * PUT api/Tuple/A1TupleArray
		 */
		a1TupleArray(idAndOrderArray: Array<{item1: string, item2: number}>, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'api/Tuple/A1TupleArray', idAndOrderArray, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update IEnumerable Tuple in a transaction
		 * PUT api/Tuple/A1TupleArray
		 */
		a2TupleIEnumerable(idAndOrderArray: Array<{item1: string, item2: number}>, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'api/Tuple/A1TupleArray', idAndOrderArray, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post tuple
		 * POST api/Tuple/ChangeName
		 */
		changeName(d: {item1: string, item2: DemoWebApi_DemoData_Client.Person}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/ChangeName', d, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Get Tuple in return. MaybeNull
		 * GET api/Tuple/PeopleCompany4
		 */
		getPeopleCompany4(callback: (data : {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/PeopleCompany4', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * MaybeNull
		 * GET api/Tuple/PeopleCompany5
		 */
		getPeopleCompany5(callback: (data : {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/PeopleCompany5', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple1
		 */
		getTuple1(callback: (data : {item1: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple1', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple2
		 */
		getTuple2(callback: (data : {item1: string, item2: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple3
		 */
		getTuple3(callback: (data : {item1: string, item2: string, item3: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple3', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple4
		 */
		getTuple4(callback: (data : {item1: string, item2: string, item3: string, item4: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple4', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple5
		 */
		getTuple5(callback: (data : {item1: string, item2: string, item3: string, item4: string, item5: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple5', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple6
		 */
		getTuple6(callback: (data : {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple6', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Tuple/Tuple7
		 */
		getTuple7(callback: (data : {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple7', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Post nested tuple
		 * GET api/Tuple/Tuple8
		 */
		getTuple8(callback: (data : {item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number, rest: {item1: string, item2: string, item3: string}}) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Tuple/Tuple8', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * POST api/Tuple/PeopleCompany2
		 */
		linkPeopleCompany2(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany2', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/PeopleCompany3
		 */
		linkPeopleCompany3(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany3', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/PeopleCompany4
		 */
		linkPeopleCompany4(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany4', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/PeopleCompany5
		 */
		linkPeopleCompany5(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany5', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/PeopleCompany6
		 */
		linkPeopleCompany6(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany6', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post long tuple
		 * POST api/Tuple/PeopleCompany7
		 */
		linkPeopleCompany7(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany7', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/PeopleCompany8
		 */
		linkPeopleCompany8(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Person, rest: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany8', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/PersonCompany1
		 */
		linkPersonCompany1(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company}, callback: (data : DemoWebApi_DemoData_Client.Person) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/PersonCompany1', peopleAndCompany, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple1
		 */
		postTuple1(tuple: {item1: number}, callback: (data : number) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple1', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Post tuple string int
		 * POST api/Tuple/Tuple2
		 */
		postTuple2(tuple: {item1: string, item2: number}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple2', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple3
		 */
		postTuple3(tuple: {item1: string, item2: string, item3: number}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple3', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple4
		 */
		postTuple4(tuple: {item1: string, item2: string, item3: string, item4: number}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple4', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple5
		 */
		postTuple5(tuple: {item1: string, item2: string, item3: string, item4: string, item5: number}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple5', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple6
		 */
		postTuple6(tuple: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple6', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple7
		 */
		postTuple7(tuple: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple7', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * POST api/Tuple/Tuple8
		 */
		postTuple8(tuple: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: string, rest: {item1: string, item2: string, item3: string}}, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Tuple/Tuple8', tuple, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

	export class Values {
		constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
		}

		/**
		 * DELETE api/Values/{id}
		 */
		delete(id: number, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.delete(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get a list of value
		 * GET api/Values
		 */
		get(callback: (data : Array<string>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Values', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * Get by both Id and name
		 * GET api/Values/{id}?name={name}
		 */
		getByIdAndName(id: number, name: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Values/' + id + '?name=' + (!name ? '' : encodeURIComponent(name)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Values?name={name}
		 */
		getByName(name: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Values?name=' + (!name ? '' : encodeURIComponent(name)), callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Values/{id}
		 */
		getById(id: number, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * GET api/Values/Get2
		 */
		get2(callback: (data : Array<string>) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.get(this.baseUri + 'api/Values/Get2', callback, this.error, this.statusCode, headersHandler);
		}

		/**
		 * POST api/Values
		 */
		post(value: string, callback: (data : string) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.post(this.baseUri + 'api/Values', value, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}

		/**
		 * Update with valjue
		 * PUT api/Values/{id}
		 */
		put(id: number, value: string, callback: (data : void) => any, headersHandler?: () => {[header: string]: string}) {
			this.httpClient.put(this.baseUri + 'api/Values/' + id, value, callback, this.error, this.statusCode, 'application/json;charset=UTF-8', headersHandler);
		}
	}

}

