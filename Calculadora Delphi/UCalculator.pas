unit UCalculator;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Mask, Vcl.ExtCtrls,
  Vcl.Imaging.jpeg;

type
  TForm3 = class(TForm)
    Panel1: TPanel;
    Image1: TImage;
    Label1: TLabel;
    Label2: TLabel;
    edt_height: TMaskEdit;
    edt_weight: TMaskEdit;
    memo_result: TMemo;
    btn_calculate: TButton;
    procedure btn_calculateClick(Sender: TObject);
  private
    function imc(Value1: Currency; Value2: Currency): Currency;
  public
    { Public declarations }
  end;

var
  Form3: TForm3;
  Height: integer;
  Weight, imc: integer;
  Return: String;
  Result: Currency;

implementation

{$R *.dfm}

function TForm3.imc(Value1: Currency; Value2: Currency): Currency;
begin
  Result := Value2 / (Value1 * Value1);
end;

procedure TForm3.btn_calculateClick(Sender: TObject);
var
  Resultado: Currency;
  text: String;
begin
  Result := imc(StrToCurr(edt_height.text), StrToCurr(edt_weight.text));
  memo_result.Lines.Add(CurrToStr(Result));

  if Result < 18.5 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Magreza'
  else if Result < 25 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Saudável (Indicado)'
  else if Result < 30 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Sobrepeso'
  else if Result < 35 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Obesidade Grau I (Leve)'
  else if Result < 40 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Obesidade Grau II (Severa)'
  else if Result < 50 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Obesidade Grau III (Mórbida)'
  else if Result < 60 then
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Super Obeso)'
  else
    text := 'Seu IMC é ' + (CurrToStr(Result)) +
      ' e você está na classificação Hiper Obeso';

  memo_result.Lines[1] := text;

end;

end.
