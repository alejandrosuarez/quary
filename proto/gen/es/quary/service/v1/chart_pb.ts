// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file quary/service/v1/chart.proto (package quary.service.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";

/**
 * Parsed chart that is in a project
 *
 * @generated from message quary.service.v1.Chart
 */
export class Chart extends Message<Chart> {
  /**
   * Name of the chart
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Description of the cart
   *
   * @generated from field: optional string description = 2;
   */
  description?: string;

  /**
   * Tags are used to group different parts of the project together. For example, you could tag all models that are
   * related to a specific department with the same tag.
   *
   * @generated from field: repeated string tags = 3;
   */
  tags: string[] = [];

  /**
   * Path of the file
   *
   * @generated from field: string path = 9;
   */
  path = "";

  /**
   * Where the data comes from
   *
   * @generated from oneof quary.service.v1.Chart.source
   */
  source: {
    /**
     * raw sql that is passed to the database
     *
     * @generated from field: string raw_sql = 4;
     */
    value: string;
    case: "rawSql";
  } | {
    /**
     * sql that is passed to the database with templating through quary
     *
     * @generated from field: string pre_templated_sql = 5;
     */
    value: string;
    case: "preTemplatedSql";
  } | {
    /**
     * reference to a pre-existing asset, model, source, seed, snapshot
     *
     * @generated from field: quary.service.v1.Chart.AssetReference reference = 6;
     */
    value: Chart_AssetReference;
    case: "reference";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * Configuration for the chart that is passed to perspective
   *
   * @generated from field: google.protobuf.Struct config = 7;
   */
  config?: Struct;

  /**
   * References that this chart has, these can be models/sources/seeds/snapshots
   *
   * @generated from field: repeated string references = 8;
   */
  references: string[] = [];

  constructor(data?: PartialMessage<Chart>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.Chart";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "raw_sql", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "source" },
    { no: 5, name: "pre_templated_sql", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "source" },
    { no: 6, name: "reference", kind: "message", T: Chart_AssetReference, oneof: "source" },
    { no: 7, name: "config", kind: "message", T: Struct },
    { no: 8, name: "references", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Chart {
    return new Chart().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Chart {
    return new Chart().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Chart {
    return new Chart().fromJsonString(jsonString, options);
  }

  static equals(a: Chart | PlainMessage<Chart> | undefined, b: Chart | PlainMessage<Chart> | undefined): boolean {
    return proto3.util.equals(Chart, a, b);
  }
}

/**
 * @generated from message quary.service.v1.Chart.AssetReference
 */
export class Chart_AssetReference extends Message<Chart_AssetReference> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<Chart_AssetReference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.Chart.AssetReference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Chart_AssetReference {
    return new Chart_AssetReference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Chart_AssetReference {
    return new Chart_AssetReference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Chart_AssetReference {
    return new Chart_AssetReference().fromJsonString(jsonString, options);
  }

  static equals(a: Chart_AssetReference | PlainMessage<Chart_AssetReference> | undefined, b: Chart_AssetReference | PlainMessage<Chart_AssetReference> | undefined): boolean {
    return proto3.util.equals(Chart_AssetReference, a, b);
  }
}

