const xdr = SorobanClient.xdr;
const ScInt = SorobanClient.ScInt; // shorthand
const [scValToNative, nativeToScVal] = [
  SorobanClient.scValToNative,
  SorobanClient.nativeToScVal
];

describe('parsing and building ScVals', function () {


  it('Can parse entries', function () {
    CUSTOM_TYPES_XDR.forEach((entry, i) => {
      console.log(entry)
      console.log(xdr.ScSpecEntry.fromXDR(entry, 'base64'));
    });

  });

});


function custom_types_spec() {
  return SorobanClient.ContractSpec(xdr.Sp)
}

const CUSTOM_TYPES_XDR = ["AAAAAQAAAC9UaGlzIGlzIGZyb20gdGhlIHJ1c3QgZG9jIGFib3ZlIHRoZSBzdHJ1Y3QgVGVzdAAAAAAAAAAABFRlc3QAAAADAAAAAAAAAAFhAAAAAAAABAAAAAAAAAABYgAAAAAAAAEAAAAAAAAAAWMAAAAAAAAR",
  "AAAAAgAAAAAAAAAAAAAAClNpbXBsZUVudW0AAAAAAAMAAAAAAAAAAAAAAAVGaXJzdAAAAAAAAAAAAAAAAAAABlNlY29uZAAAAAAAAAAAAAAAAAAFVGhpcmQAAAA=",
  "AAAAAwAAAAAAAAAAAAAACVJveWFsQ2FyZAAAAAAAAAMAAAAAAAAABEphY2sAAAALAAAAAAAAAAVRdWVlbgAAAAAAAAwAAAAAAAAABEtpbmcAAAAN",
  "AAAAAQAAAAAAAAAAAAAAC1R1cGxlU3RydWN0AAAAAAIAAAAAAAAAATAAAAAAAAfQAAAABFRlc3QAAAAAAAAAATEAAAAAAAfQAAAAClNpbXBsZUVudW0AAA==",
  "AAAAAgAAAAAAAAAAAAAAC0NvbXBsZXhFbnVtAAAAAAUAAAABAAAAAAAAAAZTdHJ1Y3QAAAAAAAEAAAfQAAAABFRlc3QAAAABAAAAAAAAAAVUdXBsZQAAAAAAAAEAAAfQAAAAC1R1cGxlU3RydWN0AAAAAAEAAAAAAAAABEVudW0AAAABAAAH0AAAAApTaW1wbGVFbnVtAAAAAAABAAAAAAAAAAVBc3NldAAAAAAAAAIAAAATAAAACwAAAAAAAAAAAAAABFZvaWQ=",
  "AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAAAQAAABpVbmtub3duIGVycm9yIGhhcyBvY2N1cnJlZAAAAAAABE9oTm8AAAAB",
  "AAAAAAAAAAAAAAAFaGVsbG8AAAAAAAABAAAAAAAAAAVoZWxsbwAAAAAAABEAAAABAAAAEQ==",
  "AAAAAAAAAAAAAAAEd29pZAAAAAAAAAAA",
  "AAAAAAAAAAAAAAADdmFsAAAAAAAAAAABAAAAAA==",
  "AAAAAAAAAAAAAAAQdTMyX2ZhaWxfb25fZXZlbgAAAAEAAAAAAAAABHUzMl8AAAAEAAAAAQAAA+kAAAAEAAAAAw==",
  "AAAAAAAAAAAAAAAEdTMyXwAAAAEAAAAAAAAABHUzMl8AAAAEAAAAAQAAAAQ=",
  "AAAAAAAAAAAAAAAEaTMyXwAAAAEAAAAAAAAABGkzMl8AAAAFAAAAAQAAAAU=",
  "AAAAAAAAAAAAAAAEaTY0XwAAAAEAAAAAAAAABGk2NF8AAAAHAAAAAQAAAAc=",
  "AAAAAAAAACxFeGFtcGxlIGNvbnRyYWN0IG1ldGhvZCB3aGljaCB0YWtlcyBhIHN0cnVjdAAAAApzdHJ1a3RfaGVsAAAAAAABAAAAAAAAAAZzdHJ1a3QAAAAAB9AAAAAEVGVzdAAAAAEAAAPqAAAAEQ==",
  "AAAAAAAAAAAAAAAGc3RydWt0AAAAAAABAAAAAAAAAAZzdHJ1a3QAAAAAB9AAAAAEVGVzdAAAAAEAAAfQAAAABFRlc3Q=",
  "AAAAAAAAAAAAAAAGc2ltcGxlAAAAAAABAAAAAAAAAAZzaW1wbGUAAAAAB9AAAAAKU2ltcGxlRW51bQAAAAAAAQAAB9AAAAAKU2ltcGxlRW51bQAA",
  "AAAAAAAAAAAAAAAHY29tcGxleAAAAAABAAAAAAAAAAdjb21wbGV4AAAAB9AAAAALQ29tcGxleEVudW0AAAAAAQAAB9AAAAALQ29tcGxleEVudW0A",
  "AAAAAAAAAAAAAAAIYWRkcmVzc2UAAAABAAAAAAAAAAhhZGRyZXNzZQAAABMAAAABAAAAEw==",
  "AAAAAAAAAAAAAAAFYnl0ZXMAAAAAAAABAAAAAAAAAAVieXRlcwAAAAAAAA4AAAABAAAADg==",
  "AAAAAAAAAAAAAAAHYnl0ZXNfbgAAAAABAAAAAAAAAAdieXRlc19uAAAAA+4AAAAJAAAAAQAAA+4AAAAJ",
  "AAAAAAAAAAAAAAAEY2FyZAAAAAEAAAAAAAAABGNhcmQAAAfQAAAACVJveWFsQ2FyZAAAAAAAAAEAAAfQAAAACVJveWFsQ2FyZAAAAA==",
  "AAAAAAAAAAAAAAAHYm9vbGVhbgAAAAABAAAAAAAAAAdib29sZWFuAAAAAAEAAAABAAAAAQ==",
  "AAAAAAAAABdOZWdhdGVzIGEgYm9vbGVhbiB2YWx1ZQAAAAADbm90AAAAAAEAAAAAAAAAB2Jvb2xlYW4AAAAAAQAAAAEAAAAB",
  "AAAAAAAAAAAAAAAEaTEyOAAAAAEAAAAAAAAABGkxMjgAAAALAAAAAQAAAAs=",
  "AAAAAAAAAAAAAAAEdTEyOAAAAAEAAAAAAAAABHUxMjgAAAAKAAAAAQAAAAo=",
  "AAAAAAAAAAAAAAAKbXVsdGlfYXJncwAAAAAAAgAAAAAAAAABYQAAAAAAAAQAAAAAAAAAAWIAAAAAAAABAAAAAQAAAAQ=",
  "AAAAAAAAAAAAAAADbWFwAAAAAAEAAAAAAAAAA21hcAAAAAPsAAAABAAAAAEAAAABAAAD7AAAAAQAAAAB",
  "AAAAAAAAAAAAAAADdmVjAAAAAAEAAAAAAAAAA3ZlYwAAAAPqAAAABAAAAAEAAAPqAAAABA==",
  "AAAAAAAAAAAAAAAFdHVwbGUAAAAAAAABAAAAAAAAAAV0dXBsZQAAAAAAA+0AAAACAAAAEQAAAAQAAAABAAAD7QAAAAIAAAARAAAABA==",
  "AAAAAAAAAB9FeGFtcGxlIG9mIGFuIG9wdGlvbmFsIGFyZ3VtZW50AAAAAAZvcHRpb24AAAAAAAEAAAAAAAAABm9wdGlvbgAAAAAD6AAAAAQAAAABAAAD6AAAAAQ=",
  "AAAAAAAAAAAAAAAEdTI1NgAAAAEAAAAAAAAABHUyNTYAAAAMAAAAAQAAAAw=",
  "AAAAAAAAAAAAAAAEaTI1NgAAAAEAAAAAAAAABGkyNTYAAAANAAAAAQAAAA0=",
  "AAAAAAAAAAAAAAAGc3RyaW5nAAAAAAABAAAAAAAAAAZzdHJpbmcAAAAAABAAAAABAAAAEA==",
  "AAAAAAAAAAAAAAAMdHVwbGVfc3RydWt0AAAAAQAAAAAAAAAMdHVwbGVfc3RydWt0AAAH0AAAAAtUdXBsZVN0cnVjdAAAAAABAAAH0AAAAAtUdXBsZVN0cnVjdAA="]