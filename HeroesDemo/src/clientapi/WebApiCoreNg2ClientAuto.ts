import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace DemoWebApi_DemoData_Client {
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
		id?: string | null;

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
		nullableId?: string | null;
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
		optionalEnum?: DemoWebApi_DemoData_Client.MyEnumType | null;
		optionalInt?: number | null;
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
		baptised?: Date | null;

		/**
		 * Date of Birth.
		 * This is optional.
		 */
		dob?: Date | null;
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

export namespace DemoWebApi_DemoData_Another_Client {

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

export namespace DemoWebApi_Models_Client {
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

export namespace DemoWebApi_Controllers_Client {

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
		death?: Date | null;
		dob?: Date;
		id?: number;
		name?: string;
	}

	export interface SuperHero extends DemoWebApi_Controllers_Client.Hero {
		super?: boolean;
	}

}

export namespace DemoCoreWeb_Controllers_Client {
	@Injectable()
	export class SpecialTypes {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Anonymous Dynamic of C#
		 * GET api/SpecialTypes/AnonymousDynamic
		 * @return {any} dyanmic things
		 */
		getAnonymousDynamic(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SpecialTypes/AnonymousDynamic', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Async function returing dynamic
		 * GET api/SpecialTypes/AnonymousDynamic2
		 */
		getAnonymousDynamic2(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SpecialTypes/AnonymousDynamic2', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SpecialTypes/AnonymousObject
		 */
		getAnonymousObject(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SpecialTypes/AnonymousObject', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Async function returning object
		 * GET api/SpecialTypes/AnonymousObject2
		 */
		getAnonymousObject2(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SpecialTypes/AnonymousObject2', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/SpecialTypes/AnonymousObject
		 */
		postAnonymousObject(obj?: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SpecialTypes/AnonymousObject', JSON.stringify(obj), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Async returning object, Post dynamic
		 * POST api/SpecialTypes/AnonymousObject2
		 */
		postAnonymousObject2(obj?: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SpecialTypes/AnonymousObject2', JSON.stringify(obj), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

export namespace DemoWebApi_Controllers_Client {
	@Injectable()
	export class DateTypes {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET api/DateTypes/GetDateOnlyMin
		 */
		getDateOnlyMin(headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/GetDateOnlyMin', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/DateTypes/NullableDatetime/{hasValue}
		 */
		getDateTime(hasValue?: boolean, headersHandler?: () => HttpHeaders): Observable<Date | null> {
			return this.http.get<Date | null>(this.baseUri + 'api/DateTypes/NullableDatetime/' + hasValue, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * return DateTimeOffset.Now
		 * GET api/DateTypes/ForDateTimeOffset
		 */
		getDateTimeOffset(headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/ForDateTimeOffset', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/DateTypes/NextHour/{dt}
		 */
		getNextHour(dt?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/NextHour/' + dt?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * If Dt is not defined, add a hour from now
		 * GET api/DateTypes/NextHourNullable?n={n}&dt={dt}
		 */
		getNextHourNullable(n?: number, dt?: Date | null, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/NextHourNullable?n=' + n + (dt ? '&dt=' + dt?.toISOString() : ''), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/DateTypes/NextYear/{dt}
		 */
		getNextYear(dt?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/NextYear/' + dt?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * If Dt is not defined, add a year from now
		 * GET api/DateTypes/NextYearNullable?n={n}&dt={dt}
		 */
		getNextYearNullable(n?: number, dt?: Date | null, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/NextYearNullable?n=' + n + (dt ? '&dt=' + dt?.toISOString() : ''), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Client should send DateTime.Date
		 * POST api/DateTypes/IsDateTimeDate
		 */
		isDateTimeDate(dt?: Date, headersHandler?: () => HttpHeaders): Observable<{item1: Date, item2: Date}> {
			return this.http.post<{item1: Date, item2: Date}>(this.baseUri + 'api/DateTypes/IsDateTimeDate', JSON.stringify(dt), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/DateTypes/IsDateTimeOffsetDate
		 */
		isDateTimeOffsetDate(dt?: Date, headersHandler?: () => HttpHeaders): Observable<{item1: Date, item2: Date}> {
			return this.http.post<{item1: Date, item2: Date}>(this.baseUri + 'api/DateTypes/IsDateTimeOffsetDate', JSON.stringify(dt), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/DateTypes/ForDateOnly
		 */
		postDateOnly(d?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.post<Date>(this.baseUri + 'api/DateTypes/ForDateOnly', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/DateTypes/DateOnlyNullable
		 */
		postDateOnlyNullable(d?: Date | null, headersHandler?: () => HttpHeaders): Observable<Date | null> {
			return this.http.post<Date | null>(this.baseUri + 'api/DateTypes/DateOnlyNullable', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/DateTypes/ForDateTime
		 */
		postDateTime(d?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.post<Date>(this.baseUri + 'api/DateTypes/ForDateTime', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * return d;
		 * POST api/DateTypes/ForDateTimeOffset
		 */
		postDateTimeOffset(d?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.post<Date>(this.baseUri + 'api/DateTypes/ForDateTimeOffset', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * return d.ToString("O")
		 * POST api/DateTypes/ForDateTimeOffsetForO
		 */
		postDateTimeOffsetForO(d?: Date, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/DateTypes/ForDateTimeOffsetForO', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/DateTypes/ForDateTimeOffsetForOffset
		 */
		postDateTimeOffsetForOffset(d?: Date, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/DateTypes/ForDateTimeOffsetForOffset', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Returned is DateTimeOffset?
		 * POST api/DateTypes/DateTimeOffsetNullable
		 */
		postDateTimeOffsetNullable(d?: Date | null, headersHandler?: () => HttpHeaders): Observable<Date | null> {
			return this.http.post<Date | null>(this.baseUri + 'api/DateTypes/DateTimeOffsetNullable', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/DateTypes/ForDateTimeOffsetStringForOffset
		 */
		postDateTimeOffsetStringForOffset(s?: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/DateTypes/ForDateTimeOffsetStringForOffset', JSON.stringify(s), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/DateTypes/NextYear
		 */
		postNextYear(dt?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.post<Date>(this.baseUri + 'api/DateTypes/NextYear', JSON.stringify(dt), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * GET api/DateTypes/DateOnlyStringQuery?d={d}
		 */
		queryDateOnlyAsString(d?: string, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/DateOnlyStringQuery?d=' + (!d ? '' : encodeURIComponent(d)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/DateTypes/RouteDateTimeOffset/{d}
		 */
		routeDateTimeOffset(d?: Date, headersHandler?: () => HttpHeaders): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/DateTypes/RouteDateTimeOffset/' + d?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return Tuple DateTime?, DateTime?
		 * GET api/DateTypes/SearchDateRange?startDate={startDate}&endDate={endDate}
		 * @param {Date | null} startDate DateTime? startDate = null
		 * @param {Date | null} endDate DateTime? endDate = null
		 */
		searchDateRange(startDate?: Date | null, endDate?: Date | null, headersHandler?: () => HttpHeaders): Observable<{item1: Date | null, item2: Date | null}> {
			return this.http.get<{item1: Date | null, item2: Date | null}>(this.baseUri + 'api/DateTypes/SearchDateRange?' + (startDate ? 'startDate=' + startDate?.toISOString() : '') + (endDate ? '&endDate=' + endDate?.toISOString() : ''), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	@Injectable()
	export class Entities {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Entities/createCompany
		 */
		createCompany(p?: DemoWebApi_DemoData_Client.Company, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Company> {
			return this.http.post<DemoWebApi_DemoData_Client.Company>(this.baseUri + 'api/Entities/createCompany', JSON.stringify(p), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Entities/createPerson
		 */
		createPerson(p?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Entities/createPerson', JSON.stringify(p), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Entities/createPerson2
		 */
		createPerson2(p?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/createPerson2', JSON.stringify(p), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Entities/createPerson3
		 */
		createPerson3(p?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/createPerson3', JSON.stringify(p), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * DELETE api/Entities/{id}
		 */
		delete(id?: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Entities/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Entities/Company/{id}
		 */
		getCompany(id?: number, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Company> {
			return this.http.get<DemoWebApi_DemoData_Client.Company>(this.baseUri + 'api/Entities/Company/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Entities/Mims
		 */
		getMims(p?: DemoWebApi_DemoData_Client.MimsPackage, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.MimsResult<string>> {
			return this.http.post<DemoWebApi_DemoData_Client.MimsResult<string>>(this.baseUri + 'api/Entities/Mims', JSON.stringify(p), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post MyGeneric string, decimal, double
		 * POST api/Entities/MyGeneric
		 */
		getMyGeneric(s?: DemoWebApi_DemoData_Client.MyGeneric<string, number, number>, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.MyGeneric<string, number, number>> {
			return this.http.post<DemoWebApi_DemoData_Client.MyGeneric<string, number, number>>(this.baseUri + 'api/Entities/MyGeneric', JSON.stringify(s), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post MyGeneric string, decimal, Person
		 * POST api/Entities/MyGenericPerson
		 */
		getMyGenericPerson(s?: DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>> {
			return this.http.post<DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/Entities/MyGenericPerson', JSON.stringify(s), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Return empty body, status 204. MaybeNull
		 * GET api/Entities/NullCompany
		 */
		getNullCompany(headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Company | null> {
			return this.http.get<DemoWebApi_DemoData_Client.Company | null>(this.baseUri + 'api/Entities/NullCompany', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a person
		 * so to know the person
		 * GET api/Entities/getPerson/{id}
		 * @param {number} id unique id of that guy
		 * @return {DemoWebApi_DemoData_Client.Person} person in db
		 */
		getPerson(id?: number, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.get<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/getPerson/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Entities/getPerson2/{id}
		 */
		getPerson2(id?: number, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.get<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/getPerson2/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * PUT api/Entities/link?id={id}&relationship={relationship}
		 */
		linkPerson(id?: number, relationship?: string, person?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.put<boolean>(this.baseUri + 'api/Entities/link?id=' + id + '&relationship=' + (!relationship ? '' : encodeURIComponent(relationship)), JSON.stringify(person), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * PATCH api/Entities/patchPerson
		 */
		patchPerson(person?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.patch(this.baseUri + 'api/Entities/patchPerson', JSON.stringify(person), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Entities/IdMap
		 */
		postIdMap(idMap?: DemoWebApi_DemoData_Client.IdMap, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.IdMap> {
			return this.http.post<DemoWebApi_DemoData_Client.IdMap>(this.baseUri + 'api/Entities/IdMap', JSON.stringify(idMap), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * PUT api/Entities/updatePerson
		 */
		updatePerson(person?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.put(this.baseUri + 'api/Entities/updatePerson', JSON.stringify(person), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}
	}

	@Injectable()
	export class Heroes {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DELETE api/Heroes/{id}
		 */
		delete(id?: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Heroes/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Heroes/asyncHeroes
		 */
		getAsyncHeroes(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_Controllers_Client.Hero>> {
			return this.http.get<Array<DemoWebApi_Controllers_Client.Hero>>(this.baseUri + 'api/Heroes/asyncHeroes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a hero. Nullable reference. MaybeNull
		 * GET api/Heroes/{id}
		 */
		getHero(id?: number, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_Controllers_Client.Hero | null> {
			return this.http.get<DemoWebApi_Controllers_Client.Hero | null>(this.baseUri + 'api/Heroes/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all heroes.
		 * GET api/Heroes
		 */
		getHeros(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_Controllers_Client.Hero>> {
			return this.http.get<Array<DemoWebApi_Controllers_Client.Hero>>(this.baseUri + 'api/Heroes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * MaybeNull
		 * GET api/Heroes/super?id={id}
		 */
		getSuperHero(id?: number, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_Controllers_Client.SuperHero | null> {
			return this.http.get<DemoWebApi_Controllers_Client.SuperHero | null>(this.baseUri + 'api/Heroes/super?id=' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Heroes
		 */
		post(name?: string, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.post<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes', JSON.stringify(name), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Add a hero. The client will not expect null. NotNull
		 * POST api/Heroes/q?name={name}
		 * @return {DemoWebApi_Controllers_Client.Hero} Always object.
		 */
		postWithQuery(name?: string, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.post<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes/q?name=' + (!name ? '' : encodeURIComponent(name)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update hero.
		 * PUT api/Heroes
		 */
		put(hero?: DemoWebApi_Controllers_Client.Hero, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.put<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes', JSON.stringify(hero), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Search heroes
		 * GET api/Heroes/search/{name}
		 * @param {string} name keyword contained in hero name.
		 * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
		 */
		search(name?: string, headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_Controllers_Client.Hero>> {
			return this.http.get<Array<DemoWebApi_Controllers_Client.Hero>>(this.baseUri + 'api/Heroes/search/' + (!name ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	@Injectable()
	export class StringData {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Athlethe Search
		 * GET api/StringData/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
		 * @param {number | null} take Generic optional parameter. Default 10
		 * @param {number} skip Default 0
		 * @param {string} order default null
		 */
		athletheSearch(take?: number | null, skip?: number, order?: string, sort?: string, search?: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/StringData/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (!order ? '' : encodeURIComponent(order)) + '&sort=' + (!sort ? '' : encodeURIComponent(sort)) + '&search=' + (!search ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/StringData/String
		 */
		getABCDE(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/StringData/String', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Return empty string JSON object. Status 200.
		 * GET api/StringData/EmptyString
		 */
		getEmptyString(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/StringData/EmptyString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Return empty body with status 204 No Content, even though the default mime type is application/json. MaybeNull
		 * GET api/StringData/NullString
		 */
		getNullString(headersHandler?: () => HttpHeaders): Observable<string | null> {
			return this.http.get(this.baseUri + 'api/StringData/NullString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}
	}

	@Injectable()
	export class SuperDemo {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET api/SuperDemo/ActionResult
		 */
		getActionResult(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/ActionResult', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/ActionResult2
		 */
		getActionResult2(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/ActionResult2', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/ActionStringResult
		 */
		getActionStringResult(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/SuperDemo/ActionStringResult', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/BadRequest
		 */
		getBadRequest(headersHandler?: () => HttpHeaders): Observable<HttpResponse<Blob>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/BadRequest', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'blob' });
		}

		/**
		 * GET api/SuperDemo/BadRequest2
		 */
		getBadRequest2(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/BadRequest2', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/bool
		 */
		getBool(headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + 'api/SuperDemo/bool', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/byte
		 */
		getbyte(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/byte', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/ByteArray
		 */
		getByteArray(headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/ByteArray', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/char
		 */
		getChar(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/SuperDemo/char', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/Collection
		 */
		getCollection(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/Collection', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/enumGet?d={d}
		 */
		getDay(d?: DemoWebApi_DemoData_Client.Days, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Days> {
			return this.http.get<DemoWebApi_DemoData_Client.Days>(this.baseUri + 'api/SuperDemo/enumGet?d=' + d, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/decimal
		 */
		getDecimal(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/decimal', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Demo
		 * GET api/SuperDemo/decimalArrayQ?a={a}
		 */
		getDecimalArrayQ(a?: Array<number>, headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/decimalArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/decimal/{d}
		 */
		getDecimalSquare(d?: number, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/decimal/' + d, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/DecimalZero
		 */
		getDecimalZero(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/DecimalZero', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/StringStringDic
		 */
		getDictionary(headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'api/SuperDemo/StringStringDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/StringPersonDic
		 */
		getDictionaryOfPeople(headersHandler?: () => HttpHeaders): Observable<{[id: string]: DemoWebApi_DemoData_Client.Person }> {
			return this.http.get<{[id: string]: DemoWebApi_DemoData_Client.Person }>(this.baseUri + 'api/SuperDemo/StringPersonDic', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/StringPersonDic2
		 */
		getDictionaryOfPeople2(headersHandler?: () => HttpHeaders): Observable<{[id: string]: DemoWebApi_DemoData_Client.Person }> {
			return this.http.get<{[id: string]: DemoWebApi_DemoData_Client.Person }>(this.baseUri + 'api/SuperDemo/StringPersonDic2', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/doulbe
		 */
		getdouble(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/doulbe', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Result of 0.1d + 0.2d - 0.3d
		 * GET api/SuperDemo/DoubleZero
		 */
		getDoubleZero(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/DoubleZero', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Demo IEnumerable Days
		 * GET api/SuperDemo/enumArrayDays?a={a}
		 */
		getEnumArrayDays(a?: Array<DemoWebApi_DemoData_Client.Days>, headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Days>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Days>>(this.baseUri + 'api/SuperDemo/enumArrayDays?'+a?.map(z => `a=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/enumArrayQ2?a={a}
		 */
		getEnumArrayQ2(a?: Array<number>, headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/enumArrayQ2?'+a?.map(z => `a=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/FloatZero
		 */
		getFloatZero(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/FloatZero', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/ICollection
		 */
		getICollection(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/ICollection', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/IList
		 */
		getIList(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/IList', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/int2d
		 */
		getInt2D(headersHandler?: () => HttpHeaders): Observable<number[][]> {
			return this.http.get<number[][]>(this.baseUri + 'api/SuperDemo/int2d', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/int2dJagged
		 */
		getInt2DJagged(headersHandler?: () => HttpHeaders): Observable<Array<Array<number>>> {
			return this.http.get<Array<Array<number>>>(this.baseUri + 'api/SuperDemo/int2dJagged', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/intArray
		 */
		getIntArray(headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/intArray', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Demo int[];
		 * GET api/SuperDemo/intArrayQ?a={a}
		 */
		getIntArrayQ(a?: Array<number>, headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/intArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Demo IEnumerable long
		 * GET api/SuperDemo/intArrayQ2?a={a}
		 */
		getIntArrayQ2(a?: Array<number>, headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/intArrayQ2?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/int/{d}
		 */
		getIntSquare(d?: number, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/int/' + d, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/IReadOnlyCollection
		 */
		getIReadOnlyCollection(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/IReadOnlyList
		 */
		getIReadOnlyList(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/IReadOnlyList', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/KeyValuePair
		 */
		getKeyhValuePair(headersHandler?: () => HttpHeaders): Observable<{key: string, value: DemoWebApi_DemoData_Client.Person }> {
			return this.http.get<{key: string, value: DemoWebApi_DemoData_Client.Person }>(this.baseUri + 'api/SuperDemo/KeyValuePair', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/List
		 */
		getList(headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/List', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/NullableDecimal/{hasValue}
		 */
		getNullableDecimal(hasValue?: boolean, headersHandler?: () => HttpHeaders): Observable<number | null> {
			return this.http.get<number | null>(this.baseUri + 'api/SuperDemo/NullableDecimal/' + hasValue, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * MaybeNull
		 * GET api/SuperDemo/NullObject
		 */
		getNullPerson(headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person | null> {
			return this.http.get<DemoWebApi_DemoData_Client.Person | null>(this.baseUri + 'api/SuperDemo/NullObject', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
		 */
		getPrimitiveNullable(location?: string, dd?: number | null, de?: number | null, headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: number | null, item3: number | null}> {
			return this.http.get<{item1: string, item2: number | null, item3: number | null}>(this.baseUri + 'api/SuperDemo/DoubleNullable?location=' + (!location ? '' : encodeURIComponent(location)) + (dd ? '&dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
		 */
		getPrimitiveNullable2(dd?: number | null, de?: number | null, headersHandler?: () => HttpHeaders): Observable<{item1: number | null, item2: number | null}> {
			return this.http.get<{item1: number | null, item2: number | null}>(this.baseUri + 'api/SuperDemo/DoubleNullable2?' + (dd ? 'dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/sbyte
		 */
		getsbyte(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/sbyte', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/short
		 */
		getShort(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/short', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Demo string array
		 * GET api/SuperDemo/stringArrayQ?a={a}
		 */
		getStringArrayQ(a?: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/SuperDemo/stringArrayQ?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Demo List string
		 * GET api/SuperDemo/stringArrayQ2?a={a}
		 */
		getStringArrayQ2(a?: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/SuperDemo/stringArrayQ2?'+a?.map(z => `a=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * ActionResult with FileStreamResult
		 * GET api/SuperDemo/TextStream
		 */
		getTextStream(headersHandler?: () => HttpHeaders): Observable<HttpResponse<Blob>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/TextStream', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'blob' });
		}

		/**
		 * GET api/SuperDemo/uint
		 */
		getUint(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/uint', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/ulong
		 */
		getulong(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/ulong', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/SuperDemo/ushort
		 */
		getUShort(headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/ushort', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/SuperDemo/ActionResult
		 */
		postActionResult(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SuperDemo/ActionResult', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/SuperDemo/PostActionResult2
		 */
		postActionResult2(s?: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<Blob>> {
			return this.http.post(this.baseUri + 'api/SuperDemo/PostActionResult2', JSON.stringify(s), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'blob' });
		}

		/**
		 * POST api/SuperDemo/PostActionResult3
		 */
		postActionResult3(person?: DemoWebApi_DemoData_Client.Person, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SuperDemo/PostActionResult3', JSON.stringify(person), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post a collection of person
		 * POST api/SuperDemo/Collection
		 */
		postCollection(list?: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/Collection', JSON.stringify(list), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/SuperDemo/enumPost?d={d}
		 */
		postDay(d?: DemoWebApi_DemoData_Client.Days, d2?: DemoWebApi_DemoData_Client.Days, headersHandler?: () => HttpHeaders): Observable<Array<DemoWebApi_DemoData_Client.Days>> {
			return this.http.post<Array<DemoWebApi_DemoData_Client.Days>>(this.baseUri + 'api/SuperDemo/enumPost?d=' + d, JSON.stringify(d2), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Demo Dic string and person
		 * POST api/SuperDemo/StringPersonDic
		 */
		postDictionary(dic?: {[id: string]: DemoWebApi_DemoData_Client.Person }, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/StringPersonDic', JSON.stringify(dic), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/SuperDemo/Guids
		 */
		postGuids(guids?: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.post<Array<string>>(this.baseUri + 'api/SuperDemo/Guids', JSON.stringify(guids), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post ICollection of person
		 * POST api/SuperDemo/ICollection
		 */
		postICollection(list?: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/ICollection', JSON.stringify(list), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post IList of person
		 * POST api/SuperDemo/IList
		 */
		postIList(list?: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/IList', JSON.stringify(list), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/SuperDemo/int2d
		 */
		postInt2D(a?: number[][], headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/int2d', JSON.stringify(a), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Demo int[][]
		 * POST api/SuperDemo/int2djagged
		 */
		postInt2DJagged(a?: Array<Array<number>>, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/int2djagged', JSON.stringify(a), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Demo int[]
		 * POST api/SuperDemo/intArray
		 */
		postIntArray(a?: Array<number>, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/intArray', JSON.stringify(a), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post IReadOnlyCollection of person
		 * POST api/SuperDemo/IReadOnlyCollection
		 */
		postIReadOnlyCollection(list?: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', JSON.stringify(list), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post e of person
		 * POST api/SuperDemo/IReadOnlyList
		 */
		postIReadOnlyList(list?: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/IReadOnlyList', JSON.stringify(list), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post a list of person
		 * POST api/SuperDemo/List
		 */
		postList(list?: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/List', JSON.stringify(list), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/SuperDemo/PostEmpty/{i}
		 */
		postWithQueryButEmptyBody(s?: string, i?: number, headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: number}> {
			return this.http.post<{item1: string, item2: number}>(this.baseUri + 'api/SuperDemo/PostEmpty/' + i, JSON.stringify(s), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	@Injectable()
	export class TextData {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET api/TextData/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
		 */
		athletheSearch(take?: number | null, skip?: number, order?: string, sort?: string, search?: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/TextData/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (!order ? '' : encodeURIComponent(order)) + '&sort=' + (!sort ? '' : encodeURIComponent(sort)) + '&search=' + (!search ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/TextData/String
		 */
		getABCDE(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/TextData/String', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Return empty body with status 200.
		 * GET api/TextData/EmptyString
		 */
		getEmptyString(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/TextData/EmptyString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * MaybeNull
		 * GET api/TextData/NullableString
		 */
		getNullableString(headersHandler?: () => HttpHeaders): Observable<string | null> {
			return this.http.get(this.baseUri + 'api/TextData/NullableString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Return empty body with status 204 No Content.
		 * GET api/TextData/NullString
		 */
		getNullString(headersHandler?: () => HttpHeaders): Observable<string | null> {
			return this.http.get(this.baseUri + 'api/TextData/NullString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}
	}

	@Injectable()
	export class Tuple {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Update in a transaction
		 * PUT api/Tuple/A1TupleArray
		 */
		a1TupleArray(idAndOrderArray?: Array<{item1: string, item2: number}>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Tuple/A1TupleArray', JSON.stringify(idAndOrderArray), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update IEnumerable Tuple in a transaction
		 * PUT api/Tuple/A1TupleArray
		 */
		a2TupleIEnumerable(idAndOrderArray?: Array<{item1: string, item2: number}>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Tuple/A1TupleArray', JSON.stringify(idAndOrderArray), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post tuple
		 * POST api/Tuple/ChangeName
		 */
		changeName(d?: {item1: string, item2: DemoWebApi_DemoData_Client.Person}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/ChangeName', JSON.stringify(d), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Tuple in return. MaybeNull
		 * GET api/Tuple/PeopleCompany4
		 */
		getPeopleCompany4(headersHandler?: () => HttpHeaders): Observable<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company} | null> {
			return this.http.get<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company} | null>(this.baseUri + 'api/Tuple/PeopleCompany4', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * MaybeNull
		 * GET api/Tuple/PeopleCompany5
		 */
		getPeopleCompany5(headersHandler?: () => HttpHeaders): Observable<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company} | null> {
			return this.http.get<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company} | null>(this.baseUri + 'api/Tuple/PeopleCompany5', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple1
		 */
		getTuple1(headersHandler?: () => HttpHeaders): Observable<{item1: number}> {
			return this.http.get<{item1: number}>(this.baseUri + 'api/Tuple/Tuple1', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple2
		 */
		getTuple2(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: number}> {
			return this.http.get<{item1: string, item2: number}>(this.baseUri + 'api/Tuple/Tuple2', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple3
		 */
		getTuple3(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: string, item3: number}> {
			return this.http.get<{item1: string, item2: string, item3: number}>(this.baseUri + 'api/Tuple/Tuple3', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple4
		 */
		getTuple4(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: string, item3: string, item4: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: number}>(this.baseUri + 'api/Tuple/Tuple4', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple5
		 */
		getTuple5(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: string, item3: string, item4: string, item5: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: number}>(this.baseUri + 'api/Tuple/Tuple5', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple6
		 */
		getTuple6(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}>(this.baseUri + 'api/Tuple/Tuple6', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * GET api/Tuple/Tuple7
		 */
		getTuple7(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}>(this.baseUri + 'api/Tuple/Tuple7', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post nested tuple
		 * GET api/Tuple/Tuple8
		 */
		getTuple8(headersHandler?: () => HttpHeaders): Observable<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number, rest: {item1: string, item2: string, item3: string}}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number, rest: {item1: string, item2: string, item3: string}}>(this.baseUri + 'api/Tuple/Tuple8', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Tuple/PeopleCompany2
		 */
		linkPeopleCompany2(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany2', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/PeopleCompany3
		 */
		linkPeopleCompany3(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany3', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/PeopleCompany4
		 */
		linkPeopleCompany4(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany4', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/PeopleCompany5
		 */
		linkPeopleCompany5(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany5', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/PeopleCompany6
		 */
		linkPeopleCompany6(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany6', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post long tuple
		 * POST api/Tuple/PeopleCompany7
		 */
		linkPeopleCompany7(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany7', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/PeopleCompany8
		 */
		linkPeopleCompany8(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Person, rest: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany8', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/PersonCompany1
		 */
		linkPersonCompany1(peopleAndCompany?: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company}, headersHandler?: () => HttpHeaders): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PersonCompany1', JSON.stringify(peopleAndCompany), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * POST api/Tuple/Tuple1
		 */
		postTuple1(tuple?: {item1: number}, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Tuple/Tuple1', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post tuple string int
		 * POST api/Tuple/Tuple2
		 */
		postTuple2(tuple?: {item1: string, item2: number}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple2', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Tuple/Tuple3
		 */
		postTuple3(tuple?: {item1: string, item2: string, item3: number}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple3', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Tuple/Tuple4
		 */
		postTuple4(tuple?: {item1: string, item2: string, item3: string, item4: number}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple4', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Tuple/Tuple5
		 */
		postTuple5(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: number}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple5', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Tuple/Tuple6
		 */
		postTuple6(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple6', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Tuple/Tuple7
		 */
		postTuple7(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple7', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * POST api/Tuple/Tuple8
		 */
		postTuple8(tuple?: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: string, rest: {item1: string, item2: string, item3: string}}, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Tuple/Tuple8', JSON.stringify(tuple), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}
	}

	@Injectable()
	export class Values {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DELETE api/Values/{id}
		 */
		delete(id?: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Values/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of value
		 * GET api/Values
		 */
		get(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/Values', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get by both Id and name
		 * GET api/Values/{id}?name={name}
		 */
		getByIdAndName(id?: number, name?: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/Values/' + id + '?name=' + (!name ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/Values?name={name}
		 */
		getByName(name?: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/Values?name=' + (!name ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/Values/{id}
		 */
		getById(id?: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/Values/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * GET api/Values/Get2
		 */
		get2(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/Values/Get2', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * POST api/Values
		 */
		post(value?: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/Values', JSON.stringify(value), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Update with valjue
		 * PUT api/Values/{id}
		 */
		put(id?: number, value?: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Values/' + id, JSON.stringify(value), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

