// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file segment-message.proto (syntax proto3)
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
import { Message, proto3 } from '@bufbuild/protobuf'

/**
 * @generated from message SegmentMessage
 */
export class SegmentMessage extends Message<SegmentMessage> {
  /**
   * hash of the entire original message
   *
   * @generated from field: bytes entire_message_hash = 1;
   */
  entireMessageHash = new Uint8Array(0)

  /**
   * Index of this segment within the entire original message
   *
   * @generated from field: uint32 index = 2;
   */
  index = 0

  /**
   * Total number of segments the entire original message is divided into
   *
   * @generated from field: uint32 segments_count = 3;
   */
  segmentsCount = 0

  /**
   * The payload data for this particular segment
   *
   * @generated from field: bytes payload = 4;
   */
  payload = new Uint8Array(0)

  constructor(data?: PartialMessage<SegmentMessage>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'SegmentMessage'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'entire_message_hash',
      kind: 'scalar',
      T: 12 /* ScalarType.BYTES */,
    },
    { no: 2, name: 'index', kind: 'scalar', T: 13 /* ScalarType.UINT32 */ },
    {
      no: 3,
      name: 'segments_count',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
    { no: 4, name: 'payload', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SegmentMessage {
    return new SegmentMessage().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SegmentMessage {
    return new SegmentMessage().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SegmentMessage {
    return new SegmentMessage().fromJsonString(jsonString, options)
  }

  static equals(
    a: SegmentMessage | PlainMessage<SegmentMessage> | undefined,
    b: SegmentMessage | PlainMessage<SegmentMessage> | undefined
  ): boolean {
    return proto3.util.equals(SegmentMessage, a, b)
  }
}
