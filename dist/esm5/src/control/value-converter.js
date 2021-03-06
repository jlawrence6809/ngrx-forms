import { box, unbox } from '../boxing';
var ɵ0 = function (date) { return date === null ? null : date.toISOString(); }, ɵ1 = function (s) { return s === null ? null : new Date(Date.parse(s)); }, ɵ2 = function (value) { return value === null ? null : JSON.stringify(value); }, ɵ3 = function (s) { return s === null ? null : JSON.parse(s); };
// tslint:disable-next-line:variable-name
export var NgrxValueConverters = {
    default: function () {
        return {
            convertViewToStateValue: function (value) { return typeof value === 'object' && value !== null ? box(value) : value; },
            convertStateToViewValue: unbox,
        };
    },
    dateToISOString: {
        convertViewToStateValue: ɵ0,
        convertStateToViewValue: ɵ1,
    },
    objectToJSON: {
        convertViewToStateValue: ɵ2,
        convertStateToViewValue: ɵ3,
    },
};
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL3ZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFTLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztTQWdCakIsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBekMsQ0FBeUMsT0FDakQsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsT0FHaEQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQTdDLENBQTZDLE9BQ3RELFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFqQyxDQUFpQztBQWRuRSx5Q0FBeUM7QUFDekMsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUc7SUFDakMsT0FBTyxFQUFQO1FBQ0UsT0FBTztZQUNMLHVCQUF1QixFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFoRSxDQUFnRTtZQUNsRyx1QkFBdUIsRUFBRSxLQUFLO1NBQ1EsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsdUJBQXVCLElBQW1EO1FBQzFFLHVCQUF1QixJQUFrRDtLQUN4QjtJQUNuRCxZQUFZLEVBQUU7UUFDWix1QkFBdUIsSUFBd0Q7UUFDL0UsdUJBQXVCLElBQXdDO0tBQ2hCO0NBQ2xELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib3gsIEJveGVkLCB1bmJveCB9IGZyb20gJy4uL2JveGluZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdyeFZhbHVlQ29udmVydGVyPFRWaWV3LCBUU3RhdGU+IHtcbiAgY29udmVydFZpZXdUb1N0YXRlVmFsdWUodmFsdWU6IFRWaWV3KTogVFN0YXRlO1xuICBjb252ZXJ0U3RhdGVUb1ZpZXdWYWx1ZSh2YWx1ZTogVFN0YXRlKTogVFZpZXc7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5leHBvcnQgY29uc3QgTmdyeFZhbHVlQ29udmVydGVycyA9IHtcbiAgZGVmYXVsdDxUPigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udmVydFZpZXdUb1N0YXRlVmFsdWU6IHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwgPyBib3godmFsdWUpIDogdmFsdWUsXG4gICAgICBjb252ZXJ0U3RhdGVUb1ZpZXdWYWx1ZTogdW5ib3gsXG4gICAgfSBhcyBOZ3J4VmFsdWVDb252ZXJ0ZXI8VCwgQm94ZWQ8VD4gfCBUPjtcbiAgfSxcbiAgZGF0ZVRvSVNPU3RyaW5nOiB7XG4gICAgY29udmVydFZpZXdUb1N0YXRlVmFsdWU6IGRhdGUgPT4gZGF0ZSA9PT0gbnVsbCA/IG51bGwgOiBkYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgY29udmVydFN0YXRlVG9WaWV3VmFsdWU6IHMgPT4gcyA9PT0gbnVsbCA/IG51bGwgOiBuZXcgRGF0ZShEYXRlLnBhcnNlKHMpKSxcbiAgfSBhcyBOZ3J4VmFsdWVDb252ZXJ0ZXI8RGF0ZSB8IG51bGwsIHN0cmluZyB8IG51bGw+LFxuICBvYmplY3RUb0pTT046IHtcbiAgICBjb252ZXJ0Vmlld1RvU3RhdGVWYWx1ZTogdmFsdWUgPT4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpLFxuICAgIGNvbnZlcnRTdGF0ZVRvVmlld1ZhbHVlOiBzID0+IHMgPT09IG51bGwgPyBudWxsIDogSlNPTi5wYXJzZShzKSxcbiAgfSBhcyBOZ3J4VmFsdWVDb252ZXJ0ZXI8e30gfCBudWxsLCBzdHJpbmcgfCBudWxsPixcbn07XG4iXX0=