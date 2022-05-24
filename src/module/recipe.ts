export class Recipe{
constructor(public  Id :string, public  Name :string, public  IdCategory :string, public  TimeDursation :number, public  Level :number, public  Description :string,
    public  ListOfRe :string[],  public Preparetion :string[],  public IdUser :string,  public Image :string){}
}