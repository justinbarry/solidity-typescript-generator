// THIS FILE IS AUTOMATICALLY GENERATED BY `generateContractInterfaces.ts`. DO NOT EDIT BY HAND'

//https://github.com/Microsoft/TypeScript/issues/202#issuecomment-429578149
// @ts-ignore
export type Branded<T, B> = infer _ extends B ? T : never

export type Int256<TLargeInteger> = Branded<TLargeInteger, 'Int256'>
export type Int248<TLargeInteger> = Branded<TLargeInteger, 'Int248'>
export type Int240<TLargeInteger> = Branded<TLargeInteger, 'Int240'>
export type Int232<TLargeInteger> = Branded<TLargeInteger, 'Int232'>
export type Int224<TLargeInteger> = Branded<TLargeInteger, 'Int224'>
export type Int216<TLargeInteger> = Branded<TLargeInteger, 'Int216'>
export type Int208<TLargeInteger> = Branded<TLargeInteger, 'Int208'>
export type Int200<TLargeInteger> = Branded<TLargeInteger, 'Int200'>
export type Int192<TLargeInteger> = Branded<TLargeInteger, 'Int192'>
export type Int184<TLargeInteger> = Branded<TLargeInteger, 'Int184'>
export type Int176<TLargeInteger> = Branded<TLargeInteger, 'Int176'>
export type Int168<TLargeInteger> = Branded<TLargeInteger, 'Int168'>
export type Int160<TLargeInteger> = Branded<TLargeInteger, 'Int160'>
export type Int152<TLargeInteger> = Branded<TLargeInteger, 'Int152'>
export type Int144<TLargeInteger> = Branded<TLargeInteger, 'Int144'>
export type Int136<TLargeInteger> = Branded<TLargeInteger, 'Int136'>
export type Int128<TLargeInteger> = Branded<TLargeInteger, 'Int128'>
export type Int120<TLargeInteger> = Branded<TLargeInteger, 'Int120'>
export type Int112<TLargeInteger> = Branded<TLargeInteger, 'Int112'>
export type Int104<TLargeInteger> = Branded<TLargeInteger, 'Int104'>
export type Int96<TLargeInteger> = Branded<TLargeInteger, 'Int96'>
export type Int88<TLargeInteger> = Branded<TLargeInteger, 'Int88'>
export type Int80<TLargeInteger> = Branded<TLargeInteger, 'Int80'>
export type Int72<TLargeInteger> = Branded<TLargeInteger, 'Int72'>
export type Int64<TLargeInteger> = Branded<TLargeInteger, 'Int64'>
export type Int56<TLargeInteger> = Branded<TLargeInteger, 'Int56'>
export type Int48 = Branded<number, 'Int48'>
export type Int40 = Branded<number, 'Int40'>
export type Int32 = Branded<number, 'Int32'>
export type Int24 = Branded<number, 'Int24'>
export type Int16 = Branded<number, 'Int16'>
export type Int8 = Branded<number, 'Int8'>
export type UInt256<TLargeInteger> = Branded<TLargeInteger, 'UInt256'>
export type UInt248<TLargeInteger> = Branded<TLargeInteger, 'UInt248'>
export type UInt240<TLargeInteger> = Branded<TLargeInteger, 'UInt240'>
export type UInt232<TLargeInteger> = Branded<TLargeInteger, 'UInt232'>
export type UInt224<TLargeInteger> = Branded<TLargeInteger, 'UInt224'>
export type UInt216<TLargeInteger> = Branded<TLargeInteger, 'UInt216'>
export type UInt208<TLargeInteger> = Branded<TLargeInteger, 'UInt208'>
export type UInt200<TLargeInteger> = Branded<TLargeInteger, 'UInt200'>
export type UInt192<TLargeInteger> = Branded<TLargeInteger, 'UInt192'>
export type UInt184<TLargeInteger> = Branded<TLargeInteger, 'UInt184'>
export type UInt176<TLargeInteger> = Branded<TLargeInteger, 'UInt176'>
export type UInt168<TLargeInteger> = Branded<TLargeInteger, 'UInt168'>
export type UInt160<TLargeInteger> = Branded<TLargeInteger, 'UInt160'>
export type UInt152<TLargeInteger> = Branded<TLargeInteger, 'UInt152'>
export type UInt144<TLargeInteger> = Branded<TLargeInteger, 'UInt144'>
export type UInt136<TLargeInteger> = Branded<TLargeInteger, 'UInt136'>
export type UInt128<TLargeInteger> = Branded<TLargeInteger, 'UInt128'>
export type UInt120<TLargeInteger> = Branded<TLargeInteger, 'UInt120'>
export type UInt112<TLargeInteger> = Branded<TLargeInteger, 'UInt112'>
export type UInt104<TLargeInteger> = Branded<TLargeInteger, 'UInt104'>
export type UInt96<TLargeInteger> = Branded<TLargeInteger, 'UInt96'>
export type UInt88<TLargeInteger> = Branded<TLargeInteger, 'UInt88'>
export type UInt80<TLargeInteger> = Branded<TLargeInteger, 'UInt80'>
export type UInt72<TLargeInteger> = Branded<TLargeInteger, 'UInt72'>
export type UInt64<TLargeInteger> = Branded<TLargeInteger, 'UInt64'>
export type UInt56<TLargeInteger> = Branded<TLargeInteger, 'UInt56'>
export type UInt48 = Branded<number, 'UInt48'>
export type UInt40 = Branded<number, 'UInt40'>
export type UInt32 = Branded<number, 'UInt32'>
export type UInt24 = Branded<number, 'UInt24'>
export type UInt16 = Branded<number, 'UInt16'>
export type UInt8 = Branded<number, 'UInt8'>
abstract class ByteArray<T extends ByteArray<T>> extends Uint8Array {
	from(this: T, bytes: Uint8Array, pad?: 'left' | 'right'): T
	from(this: T, hex: string): T
	from(this: T, data: Uint8Array | string, pad?: 'left' | 'right'): T {
		if (typeof data === 'string') {
			const match = new RegExp(`^(?:0x)?([a-fA-F0-9]{${this.length * 2}})$`).exec(data)
			if (match === null) throw new Error(`Can only create a ByteArray of size ${this.length} from a hex encoded string of length ${this.length} starting with an optional 0x`)
			const normalized = match[1]
			for (let i = 0; i < this.length; ++i) {
				this[i] = Number.parseInt(`${normalized[i*2]}${normalized[i*2+1]}`, 16)
			}
			return this
		} else if (data instanceof Uint8Array) {
			if (data.length <= this.length) {
				this.set(data, (pad === 'left') ? this.length - data.length : 0)
				return this
			} else {
				throw new Error(`Source bytes are longer (${data.length}) than destination bytes ${this.length}\n${data}`)
			}
		} else throw new Error(`Unexpected paramater type ${typeof data}\n${data}`)
	}
	toString = () => this.reduce((result: string, byte: number) => result + ('0' + byte.toString(16)).slice(-2), '')
	to0xString = () => `0x${this.toString()}`
	equals = (other?: Uint8Array | null): boolean => {
		if (other === undefined || other === null) return false
		if (this.length !== other.length) return false
		for (let i = 0; i < this.length; ++i) {
			if (this[i] !== other[i]) return false
		}
		return true
	}
}
export class Bytes extends ByteArray<Bytes> { Bytes: unknown }
export class Bytes32 extends ByteArray<Bytes32> { constructor() { super(32) }; Bytes32: unknown }
export class Bytes31 extends ByteArray<Bytes32> { constructor() { super(31) }; Bytes31: unknown }
export class Bytes30 extends ByteArray<Bytes30> { constructor() { super(30) }; Bytes30: unknown }
export class Bytes29 extends ByteArray<Bytes29> { constructor() { super(29) }; Bytes29: unknown }
export class Bytes28 extends ByteArray<Bytes28> { constructor() { super(28) }; Bytes28: unknown }
export class Bytes27 extends ByteArray<Bytes27> { constructor() { super(27) }; Bytes27: unknown }
export class Bytes26 extends ByteArray<Bytes26> { constructor() { super(26) }; Bytes26: unknown }
export class Bytes25 extends ByteArray<Bytes25> { constructor() { super(25) }; Bytes25: unknown }
export class Bytes24 extends ByteArray<Bytes24> { constructor() { super(24) }; Bytes24: unknown }
export class Bytes23 extends ByteArray<Bytes23> { constructor() { super(23) }; Bytes23: unknown }
export class Bytes22 extends ByteArray<Bytes22> { constructor() { super(22) }; Bytes22: unknown }
export class Bytes21 extends ByteArray<Bytes21> { constructor() { super(21) }; Bytes21: unknown }
export class Bytes20 extends ByteArray<Bytes20> { constructor() { super(20) }; Bytes20: unknown }
export class Bytes19 extends ByteArray<Bytes19> { constructor() { super(19) }; Bytes19: unknown }
export class Bytes18 extends ByteArray<Bytes18> { constructor() { super(18) }; Bytes18: unknown }
export class Bytes17 extends ByteArray<Bytes17> { constructor() { super(17) }; Bytes17: unknown }
export class Bytes16 extends ByteArray<Bytes16> { constructor() { super(16) }; Bytes16: unknown }
export class Bytes15 extends ByteArray<Bytes15> { constructor() { super(15) }; Bytes15: unknown }
export class Bytes14 extends ByteArray<Bytes14> { constructor() { super(14) }; Bytes14: unknown }
export class Bytes13 extends ByteArray<Bytes13> { constructor() { super(13) }; Bytes13: unknown }
export class Bytes12 extends ByteArray<Bytes12> { constructor() { super(12) }; Bytes12: unknown }
export class Bytes11 extends ByteArray<Bytes11> { constructor() { super(11) }; Bytes11: unknown }
export class Bytes10 extends ByteArray<Bytes10> { constructor() { super(10) }; Bytes10: unknown }
export class Bytes9 extends ByteArray<Bytes9> { constructor() { super(9) }; Bytes9: unknown }
export class Bytes8 extends ByteArray<Bytes8> { constructor() { super(8) }; Bytes8: unknown }
export class Bytes7 extends ByteArray<Bytes7> { constructor() { super(7) }; Bytes7: unknown }
export class Bytes6 extends ByteArray<Bytes6> { constructor() { super(6) }; Bytes6: unknown }
export class Bytes5 extends ByteArray<Bytes5> { constructor() { super(5) }; Bytes5: unknown }
export class Bytes4 extends ByteArray<Bytes4> { constructor() { super(4) }; Bytes4: unknown }
export class Bytes3 extends ByteArray<Bytes3> { constructor() { super(3) }; Bytes3: unknown }
export class Bytes2 extends ByteArray<Bytes2> { constructor() { super(2) }; Bytes2: unknown }
export class Bytes1 extends ByteArray<Bytes1> { constructor() { super(1) }; Bytes1: unknown }
export class Address extends ByteArray<Address> { constructor() { super(20) }; Address: unknown }
export class SignatureHash extends ByteArray<SignatureHash> { constructor() { super(4) }; SignatureHash: unknown }
export type NumberLike<TLargeInteger> = Int256<TLargeInteger> | Int248<TLargeInteger> | Int240<TLargeInteger> | Int232<TLargeInteger> | Int224<TLargeInteger> | Int216<TLargeInteger> | Int208<TLargeInteger> | Int200<TLargeInteger> | Int192<TLargeInteger> | Int184<TLargeInteger> | Int176<TLargeInteger> | Int168<TLargeInteger> | Int160<TLargeInteger> | Int152<TLargeInteger> | Int144<TLargeInteger> | Int136<TLargeInteger> | Int128<TLargeInteger> | Int120<TLargeInteger> | Int112<TLargeInteger> | Int104<TLargeInteger> | Int96<TLargeInteger> | Int88<TLargeInteger> | Int80<TLargeInteger> | Int72<TLargeInteger> | Int64<TLargeInteger> | Int56<TLargeInteger> | Int48 | Int40 | Int32 | Int24 | Int16 | Int8 | UInt256<TLargeInteger> | UInt248<TLargeInteger> | UInt240<TLargeInteger> | UInt232<TLargeInteger> | UInt224<TLargeInteger> | UInt216<TLargeInteger> | UInt208<TLargeInteger> | UInt200<TLargeInteger> | UInt192<TLargeInteger> | UInt184<TLargeInteger> | UInt176<TLargeInteger> | UInt168<TLargeInteger> | UInt160<TLargeInteger> | UInt152<TLargeInteger> | UInt144<TLargeInteger> | UInt136<TLargeInteger> | UInt128<TLargeInteger> | UInt120<TLargeInteger> | UInt112<TLargeInteger> | UInt104<TLargeInteger> | UInt96<TLargeInteger> | UInt88<TLargeInteger> | UInt80<TLargeInteger> | UInt72<TLargeInteger> | UInt64<TLargeInteger> | UInt56<TLargeInteger> | UInt48 | UInt40 | UInt32 | UInt24 | UInt16 | UInt8
export type BytesLike = Uint8Array | Bytes | Bytes32 | Bytes31 | Bytes30 | Bytes29 | Bytes28 | Bytes27 | Bytes26 | Bytes25 | Bytes24 | Bytes23 | Bytes22 | Bytes21 | Bytes20 | Bytes19 | Bytes18 | Bytes17 | Bytes16 | Bytes15 | Bytes14 | Bytes13 | Bytes12 | Bytes11 | Bytes10 | Bytes9 | Bytes8 | Bytes7 | Bytes6 | Bytes5 | Bytes4 | Bytes3 | Bytes2 | Bytes1 | Address | SignatureHash
export type EncodablePrimitive<TLargeInteger> = NumberLike<TLargeInteger> | BytesLike | string | boolean
export type Encodable<TLargeInteger> = EncodablePrimitive<TLargeInteger> | EncodableTuple<TLargeInteger> | EncodableArray<TLargeInteger>
export interface EncodableTuple<TLargeInteger> {
	[x: string]: Encodable<TLargeInteger>
}
export interface EncodableArray<TLargeInteger> extends Array<Encodable<TLargeInteger>> {}

export interface Transaction <TLargeInteger> {
	to: Address
	data: Bytes
	value?: UInt256<TLargeInteger>
}

export interface TransactionReceipt {
	success: boolean
	events: Array<EncodedEvent>
}

export interface EncodedEvent {
	topics: Array<Bytes32>
	data: Bytes
}

export interface DecodedEvent<TLargeInteger> {
	name: string
	parameters: EncodableTuple<TLargeInteger>
}

export interface EventDescription {
	name: string
	signature: string
	parameters: Array<EventParameterDescription>
}

export interface EventParameterDescription extends ParameterDescription {
	indexed: boolean
}

export interface ParameterDescription {
	name: string
	type: string
	components?: Array<ParameterDescription>
}


export const eventDescriptions: { [signatureHash: string]: EventDescription } = {

}



export type Event<TLargeInteger> = DecodedEvent<TLargeInteger>


export interface Dependencies<TLargeInteger> {
	call(transaction: Transaction<TLargeInteger>): Promise<Bytes|null>
	submitTransaction(transaction: Transaction<TLargeInteger>): Promise<TransactionReceipt>
	encodeParameters(descriptions: Array<ParameterDescription>, parameters: Array<Encodable<TLargeInteger>>): Uint8Array
	decodeParameters(descriptions: Array<ParameterDescription>, encodedParameters: Uint8Array): Array<Encodable<TLargeInteger>>
}


/**
 * By convention, pure/view methods have a `_` suffix on them indicating to the caller that the function will be executed locally and return the function's result.  payable/nonpayable functions have both a local version and a remote version (distinguished by the trailing `_`).  If the remote method is called, you will only get back a transaction hash which can be used to lookup the transaction receipt for success/failure (due to EVM limitations you will not get the function results back).
 */
export class Contract<TLargeInteger> {
	protected readonly dependencies: Dependencies<TLargeInteger>
	public readonly address: Address

	protected constructor(dependencies: Dependencies<TLargeInteger>, address: Address) {
		this.dependencies = dependencies
		this.address = address
	}

	protected async localCall(signatureHash: SignatureHash, inputParameterDescriptions: Array<ParameterDescription>, outputParameterDescriptions: Array<ParameterDescription>, parameters: Array<any>, attachedEth?: UInt256<TLargeInteger>): Promise<any> {
		const data = this.encodeMethod(signatureHash, inputParameterDescriptions, parameters)
		const transaction = Object.assign({ to: this.address, data: data }, attachedEth ? { value: attachedEth } : {})
		const result = await this.dependencies.call(transaction)
		if (result === null) throw new Error(`Call returned null, but expected a result.`)
		return this.dependencies.decodeParameters(outputParameterDescriptions, result)
	}

	protected async remoteCall(signatureHash: SignatureHash, inputParameterDescriptions: Array<ParameterDescription>, parameters: Array<any>, errorContext: { transactionName: string }, attachedEth?: UInt256<TLargeInteger>): Promise<Array<Event<TLargeInteger>>> {
		const data = this.encodeMethod(signatureHash, inputParameterDescriptions, parameters)
		const transaction = Object.assign({ to: this.address, data: data }, attachedEth ? { value: attachedEth } : {})
		const transactionReceipt = await this.dependencies.submitTransaction(transaction)
		if (!transactionReceipt.success) {
			throw new Error(`Remote call of ${errorContext.transactionName} failed: ${JSON.stringify(transactionReceipt)}`)
		}
		return this.decodeEvents(transactionReceipt.events)
	}

	private encodeMethod(signatureHash: SignatureHash, parameterDescriptions: Array<ParameterDescription>, parameters: Array<Encodable<TLargeInteger>>): Bytes {
		const parameterBytes = this.dependencies.encodeParameters(parameterDescriptions, parameters)
		return concatenateBytes([signatureHash, parameterBytes])
	}

	private decodeEvents(encodedEvents: Array<EncodedEvent>): Array<Event<TLargeInteger>> {
		const decodedEvents: Array<DecodedEvent<TLargeInteger>> = []
		encodedEvents.forEach(encodedEvent => {
			const decodedEvent = this.tryDecodeEvent(encodedEvent)
			if (decodedEvent) decodedEvents.push(decodedEvent)
		})
		return decodedEvents as Array<Event<TLargeInteger>>
	}

	private tryDecodeEvent(encodedEvent: EncodedEvent): DecodedEvent<TLargeInteger> | null {
		const signatureHash = encodedEvent.topics[0]
		const eventDescription = eventDescriptions[signatureHash.toString()]
		if (!eventDescription) return null
		const parameters = this.decodeEventParameters(eventDescription.parameters, encodedEvent.topics, encodedEvent.data, { eventSignature: eventDescription.signature })
		return { name: eventDescription.name, parameters: parameters }
	}

	private stringifyParams(params: Array<ParameterDescription>): Array<string> {
		return params.map(param => {
			if (param.type === 'tuple') {
				if (!param.components) throw new Error(`Expected components when type is ${param.type}`)
				return `(${this.stringifyParams(param.components).join(',')})`
			} else if (param.type === 'tuple[]') {
				if (!param.components) throw new Error(`Expected components when type is ${param.type}`)
				return `(${this.stringifyParams(param.components).join(',')})[]`
			} else {
				return param.type
			}
		})
	}

	private decodeEventParameters(parameters: Array<EventParameterDescription>, topics: Array<Bytes32>, data: Bytes, errorContext: { eventSignature: string }): EncodableTuple<TLargeInteger> {
		const indexedTypesForDecoding = parameters.filter(parameter => parameter.indexed).map(this.getTypeForEventDecoding)
		const nonIndexedTypesForDecoding = parameters.filter(parameter => !parameter.indexed)
		const indexedData = concatenateBytes(topics.slice(1))
		const nonIndexedData = data
		const decodedIndexedParameters = this.dependencies.decodeParameters(indexedTypesForDecoding, indexedData)
		if (!decodedIndexedParameters) throw new Error(`Failed to decode topics for event ${errorContext.eventSignature}.\n${indexedData}`)
		const decodedNonIndexedParameters = this.dependencies.decodeParameters(nonIndexedTypesForDecoding, nonIndexedData)
		if (!decodedNonIndexedParameters) throw new Error(`Failed to decode data for event ${errorContext.eventSignature}.\n${nonIndexedData}`)
		const result: EncodableTuple<TLargeInteger> = {}
		indexedTypesForDecoding.forEach((parameter, i) => result[parameter.name] = decodedIndexedParameters[i])
		nonIndexedTypesForDecoding.forEach((parameter, i) => result[parameter.name] = decodedNonIndexedParameters[i])
		return result
	}

	private getTypeForEventDecoding(parameter: EventParameterDescription): EventParameterDescription {
		if (!parameter.indexed) return parameter
		if (parameter.type !== 'string'
			&& parameter.type !== 'bytes'
			// TODO: check to see if we need to collapse fixed size tuples or not
			&& !parameter.type.startsWith('tuple')
			// TODO: check to see if we need to collapse fixed length arrays here or not
			&& !parameter.type.endsWith('[]'))
			return parameter
		return Object.assign({}, parameter, { type: 'bytes32' })
	}
}


export class banana<TLargeInteger> extends Contract<TLargeInteger> {
	public constructor(dependencies: Dependencies<TLargeInteger>, address: Address) {
		super(dependencies, address)
	}

	public cherry_ = async(options?: {  }): Promise<void> => {
		options = options || {}
		const signatureHash = Uint8Array.from([ 0xa2, 0x74, 0xc8, 0x6b ]) as SignatureHash
		const inputParameterDescriptions: Array<ParameterDescription> = []
		const outputParameterDescriptions: Array<ParameterDescription> = []
		await this.localCall(signatureHash, inputParameterDescriptions, outputParameterDescriptions, [])
	}
}


/*
** Utils
*/

function concatenateBytes(source: Array<Uint8Array>): Bytes {
	const size = source.reduce((previous, current) => previous += current.byteLength, 0)
	const bytes = new Uint8Array(size)
	let offset = 0
	for (let array of source) {
		bytes.set(array, offset)
		offset += array.byteLength
	}
	return bytes as Bytes
}
