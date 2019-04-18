export = address;
declare function address(interfaceName: any, callback: any): void;
declare namespace address {
  const MAC_IP_RE: RegExp;
  const MAC_RE: RegExp;
  function dns(filepath: any, callback: any): void;
  function ip(interfaceName: any): any;
  function ipv6(interfaceName: any): any;
  function mac(interfaceName: any, callback: any): any;
}
