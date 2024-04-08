// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file contact.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf'
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf'

/**
 * @generated from message ContactRequestPropagatedState
 */
export class ContactRequestPropagatedState extends Message<ContactRequestPropagatedState> {
  /**
   * @generated from field: uint64 local_clock = 1;
   */
  localClock = protoInt64.zero

  /**
   * @generated from field: uint64 local_state = 2;
   */
  localState = protoInt64.zero

  /**
   * @generated from field: uint64 remote_clock = 3;
   */
  remoteClock = protoInt64.zero

  /**
   * @generated from field: uint64 remote_state = 4;
   */
  remoteState = protoInt64.zero

  constructor(data?: PartialMessage<ContactRequestPropagatedState>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'ContactRequestPropagatedState'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'local_clock',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    {
      no: 2,
      name: 'local_state',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    {
      no: 3,
      name: 'remote_clock',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    {
      no: 4,
      name: 'remote_state',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ContactRequestPropagatedState {
    return new ContactRequestPropagatedState().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ContactRequestPropagatedState {
    return new ContactRequestPropagatedState().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ContactRequestPropagatedState {
    return new ContactRequestPropagatedState().fromJsonString(
      jsonString,
      options
    )
  }

  static equals(
    a:
      | ContactRequestPropagatedState
      | PlainMessage<ContactRequestPropagatedState>
      | undefined,
    b:
      | ContactRequestPropagatedState
      | PlainMessage<ContactRequestPropagatedState>
      | undefined
  ): boolean {
    return proto3.util.equals(ContactRequestPropagatedState, a, b)
  }
}

/**
 * @generated from message ContactUpdate
 */
export class ContactUpdate extends Message<ContactUpdate> {
  /**
   * @generated from field: uint64 clock = 1;
   */
  clock = protoInt64.zero

  /**
   * @generated from field: string ens_name = 2;
   */
  ensName = ''

  /**
   * @generated from field: string profile_image = 3;
   */
  profileImage = ''

  /**
   * @generated from field: string display_name = 4;
   */
  displayName = ''

  /**
   * @generated from field: uint64 contact_request_clock = 5;
   */
  contactRequestClock = protoInt64.zero

  /**
   * @generated from field: ContactRequestPropagatedState contact_request_propagated_state = 6;
   */
  contactRequestPropagatedState?: ContactRequestPropagatedState

  /**
   * @generated from field: string public_key = 7;
   */
  publicKey = ''

  constructor(data?: PartialMessage<ContactUpdate>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'ContactUpdate'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'clock', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: 'ens_name', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'profile_image',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 4,
      name: 'display_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 5,
      name: 'contact_request_clock',
      kind: 'scalar',
      T: 4 /* ScalarType.UINT64 */,
    },
    {
      no: 6,
      name: 'contact_request_propagated_state',
      kind: 'message',
      T: ContactRequestPropagatedState,
    },
    { no: 7, name: 'public_key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ContactUpdate {
    return new ContactUpdate().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ContactUpdate {
    return new ContactUpdate().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ContactUpdate {
    return new ContactUpdate().fromJsonString(jsonString, options)
  }

  static equals(
    a: ContactUpdate | PlainMessage<ContactUpdate> | undefined,
    b: ContactUpdate | PlainMessage<ContactUpdate> | undefined
  ): boolean {
    return proto3.util.equals(ContactUpdate, a, b)
  }
}

/**
 * @generated from message AcceptContactRequest
 */
export class AcceptContactRequest extends Message<AcceptContactRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * @generated from field: uint64 clock = 2;
   */
  clock = protoInt64.zero

  constructor(data?: PartialMessage<AcceptContactRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'AcceptContactRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'clock', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): AcceptContactRequest {
    return new AcceptContactRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): AcceptContactRequest {
    return new AcceptContactRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): AcceptContactRequest {
    return new AcceptContactRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: AcceptContactRequest | PlainMessage<AcceptContactRequest> | undefined,
    b: AcceptContactRequest | PlainMessage<AcceptContactRequest> | undefined
  ): boolean {
    return proto3.util.equals(AcceptContactRequest, a, b)
  }
}

/**
 * @generated from message RetractContactRequest
 */
export class RetractContactRequest extends Message<RetractContactRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * @generated from field: uint64 clock = 2;
   */
  clock = protoInt64.zero

  constructor(data?: PartialMessage<RetractContactRequest>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'RetractContactRequest'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'clock', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RetractContactRequest {
    return new RetractContactRequest().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RetractContactRequest {
    return new RetractContactRequest().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RetractContactRequest {
    return new RetractContactRequest().fromJsonString(jsonString, options)
  }

  static equals(
    a: RetractContactRequest | PlainMessage<RetractContactRequest> | undefined,
    b: RetractContactRequest | PlainMessage<RetractContactRequest> | undefined
  ): boolean {
    return proto3.util.equals(RetractContactRequest, a, b)
  }
}