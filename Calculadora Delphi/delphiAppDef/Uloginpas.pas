unit Uloginpas;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants,
  System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.ExtCtrls,
  FireDAC.Stan.Intf, FireDAC.Stan.Option, FireDAC.Stan.Error, FireDAC.UI.Intf,
  FireDAC.Phys.Intf, FireDAC.Stan.Def, FireDAC.Stan.Pool, FireDAC.Stan.Async,
  FireDAC.Phys, FireDAC.Phys.SQLite, FireDAC.Phys.SQLiteDef,
  FireDAC.Stan.ExprFuncs, FireDAC.Phys.SQLiteWrapper.Stat, FireDAC.VCLUI.Wait,
  Data.DB, FireDAC.Comp.Client, FireDAC.DApt, Vcl.Imaging.jpeg;

type
  TForm2 = class(TForm)
    Panel1: TPanel;
    Label1: TLabel;
    Label2: TLabel;
    edt_logemail: TEdit;
    edt_password: TEdit;
    Image1: TImage;
    btn_login: TButton;
    Label3: TLabel;
    Label4: TLabel;
    btn_toRegister: TButton;
    FDConnection1: TFDConnection;
    procedure btn_loginClick(Sender: TObject);
    procedure btn_toRegisterClick(Sender: TObject);
  private
    function AccessValidate(const AUser: string;
      const APassword: string): Boolean;
  public
    { Public declarations }
  end;

var
  Form2: TForm2;

implementation

{$R *.dfm}

uses Unit1, UCalculator;

function TForm2.AccessValidate(const AUser, APassword: string): Boolean;
var
  LQryUser: TFDQuery;
begin
  LQryUser := TFDQuery.Create(Self);
  try
    LQryUser.Connection := FDConnection1;
    LQryUser.SQL.Add('SELECT * FROM users');
    LQryUser.SQL.Add('WHERE email = :email');
    LQryUser.SQL.Add('AND password = :password');

    LQryUser.ParamByName('email').value := AUser;
    LQryUser.ParamByName('password').value := APassword;
    LQryUser.Open;

    Result := not LQryUser.IsEmpty;

    if Result = False then
      raise Exception.Create('Usu�rio ou senha inv�lida!');
  finally
    LQryUser.Free;
  end;
end;

procedure TForm2.btn_loginClick(Sender: TObject);
begin
  begin
    if AccessValidate(edt_logemail.Text, edt_password.Text) then
      Form3.Showmodal;
    Form2.Hide;
    Form2.Close;
  end;
  begin
    if AccessValidate(edt_logemail.Text, edt_password.Text) = False then
      ShowMessage('Usu�rio ou senha inv�lida!')
  end;

end;

procedure TForm2.btn_toRegisterClick(Sender: TObject);
begin
  Form1.Showmodal;
  Form2.Hide;
  Form2.Close;
end;

end.
