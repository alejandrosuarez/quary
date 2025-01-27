// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file quary/service/v1/table_address.proto (package quary.service.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * TableAddress is a struct that represents a table in a database. It contains the name of the table and the full path.
 *
 * @generated from message quary.service.v1.TableAddress
 */
export class TableAddress extends Message<TableAddress> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string full_path = 2;
   */
  fullPath = "";

  constructor(data?: PartialMessage<TableAddress>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.TableAddress";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "full_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TableAddress {
    return new TableAddress().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TableAddress {
    return new TableAddress().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TableAddress {
    return new TableAddress().fromJsonString(jsonString, options);
  }

  static equals(a: TableAddress | PlainMessage<TableAddress> | undefined, b: TableAddress | PlainMessage<TableAddress> | undefined): boolean {
    return proto3.util.equals(TableAddress, a, b);
  }
}

